import {
  controlBlockObjRef,
  identity,
  matchDataAttributes,
  sourceControlBlock,
} from '@openenergytools/scl-lib';

export type fcdaDesc = {
  LDevice?: string | null;
  LN?: string | null;
  DOI?: string | null;
  SDI?: string[];
  DAI?: string | null;
};

export function getFcdaInstDesc(fcda: Element): fcdaDesc {
  const [doName, daName] = ['doName', 'daName'].map(attr =>
    fcda.getAttribute(attr)
  );

  const ied = fcda.closest('IED')!;
  if (!ied) return {};

  const anyLn = Array.from(
    ied.querySelectorAll(
      `:scope > AccessPoint > Server > LDevice[inst="${fcda.getAttribute(
        'ldInst'
      )}"] > LN, :scope > AccessPoint > Server > LDevice[inst="${fcda.getAttribute(
        'ldInst'
      )}"] > LN0`
    )
  ).find(
    lN =>
      (lN.getAttribute('prefix') ?? '') ===
        (fcda.getAttribute('prefix') ?? '') &&
      lN.getAttribute('lnClass') === (fcda.getAttribute('lnClass') ?? '') &&
      (lN.getAttribute('inst') ?? '') === (fcda.getAttribute('lnInst') ?? '')
  );

  if (!anyLn) return {};

  let descs: fcdaDesc = {};

  const ldDesc = anyLn.closest('LDevice')!.getAttribute('desc');
  descs = { ...descs, ...(ldDesc && ldDesc !== '' && { LDevice: ldDesc }) };

  const lnDesc = anyLn.getAttribute('desc');
  descs = { ...descs, ...(lnDesc && lnDesc !== '' && { LN: lnDesc }) };

  const doNames = doName!.split('.');
  const daNames = daName?.split('.');

  const doi = anyLn.querySelector(`:scope > DOI[name="${doNames[0]}"`);

  if (!doi) return descs;

  let doiDesc = doi?.getAttribute('desc');

  if (!doiDesc) {
    doiDesc =
      doi?.querySelector(':scope > DAI[name="d"] > Val')?.textContent ?? null;
  }

  descs = { ...descs, ...(doiDesc && doiDesc !== '' && { DOI: doiDesc }) };

  let previousDI: Element = doi;
  const daAsSDI = daNames ? daNames.slice(0, daNames.length - 1) : [];
  doNames
    .concat(daAsSDI)
    .slice(1)
    .forEach(sdiName => {
      const sdi = previousDI.querySelector(`:scope > SDI[name="${sdiName}"]`);
      if (sdi) previousDI = sdi;
      let sdiDesc = sdi?.getAttribute('desc');

      if (!sdiDesc) {
        sdiDesc =
          sdi?.querySelector(':scope > DAI[name="d"] > Val')?.textContent ??
          null;
      }
      if (!('SDI' in descs)) {
        descs = {
          ...descs,
          ...(sdiDesc && sdiDesc !== '' && { SDI: [sdiDesc] }),
        };
      } else if (sdiDesc) descs.SDI!.push(sdiDesc);
    });

  if (!daName || !daNames) return descs;

  // ix and array elements not supported
  const lastdaName = daNames?.slice(daNames.length - 1);
  const dai = previousDI.querySelector(`:scope > DAI[name="${lastdaName}"]`);
  if (!dai) return descs;

  const daiDesc = dai.getAttribute('desc');
  descs = { ...descs, ...(daiDesc && daiDesc !== '' && { DAI: daiDesc }) };

  return descs;
}

/**
 * Check if the ExtRef is already subscribed to a FCDA Element.
 *
 * @param extRefElement - The Ext Ref Element to check.
 */
export function isSubscribed(extRefElement: Element): boolean {
  return (
    extRefElement.hasAttribute('iedName') &&
    extRefElement.hasAttribute('ldInst') &&
    extRefElement.hasAttribute('lnClass') &&
    extRefElement.hasAttribute('lnInst') &&
    extRefElement.hasAttribute('doName')
  );
}

export function inputReference(input: Element): {
  fcdaRef: string;
  desc?: string;
} {
  const prefix = input.getAttribute('prefix') ?? '';
  const lnClass = input.getAttribute('lnClass');
  const lnInst = input.getAttribute('lnInst') ?? 'LLN0';

  const ln = `${prefix}${lnClass}${lnInst}`;
  if (input.tagName === 'ClientLN') return { fcdaRef: ln };

  const ldInst = input.getAttribute('ldInst')!;

  const doName = input.getAttribute('doName');
  const daName = input.getAttribute('daName') ?? '';

  const fcdaRef = `${ldInst}/${ln}.${doName}.${daName}`;

  let desc;
  if (isSubscribed(input)) {
    const cb = sourceControlBlock(input);
    const dataSetName = cb?.getAttribute('datSet');

    const fcdas = cb?.parentElement!.querySelectorAll(
      `DataSet[name="${dataSetName}"] > FCDA`
    );
    if (fcdas) {
      const fcda = Array.from(fcdas).find(fcd =>
        matchDataAttributes(fcd, input)
      );
      if (fcda) {
        desc = Object.values(getFcdaInstDesc(fcda))
          .flat(Infinity as 1)
          .join(' > ');
      }
    }
  }

  return { fcdaRef, desc };
}

export function inputSupportingText(input: Element): {
  extRefRef: string;
  desc?: string;
} {
  const desc = input.getAttribute('desc') || undefined;
  if (input.tagName === 'ClientLN')
    return { extRefRef: desc || `${identity(input)}` };

  const intAddr = input.getAttribute('intAddr');

  return { extRefRef: intAddr || `${identity(input)}`, desc };
}

/** Returns the subscriber's supervision LN for a given control block and subscriber ied.
 *
 * @param cb - The control block being supervised
 * @param ied - The subscriber IED
 * @returns The supervision LN instance or null if not found
 */
export function getExistingSupervision(
  cb: Element,
  ied: Element
): Element | null {
  if (cb === null) return null;

  const supervisionType = cb.tagName === 'GSEControl' ? 'LGOS' : 'LSVS';

  const refSelector =
    supervisionType === 'LGOS' ? 'DOI[name="GoCBRef"]' : 'DOI[name="SvCBRef"]';

  const candidates = Array.from(
    ied.querySelectorAll(
      `:scope > AccessPoint > Server > LDevice > LN[lnClass="${supervisionType}"]>${refSelector}>DAI[name="setSrcRef"]>Val`
    )
  ).find(val => val.textContent === controlBlockObjRef(cb));

  return candidates !== undefined ? candidates.closest('LN')! : null;
}
