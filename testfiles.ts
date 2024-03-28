export const ssd = `<?xml version="1.0" encoding="UTF-8"?>
<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B" release="4" xmlns:esld="https://transpower.co.nz/SCL/SSD/SLD/v0">
	<Header id="project"/>
	<Substation name="S1" esld:w="40" esld:h="25">
		<PowerTransformer type="PTR" esld:kind="auto" esld:rot="0" name="PTR2" esld:x="11" esld:y="10" esld:lx="9" esld:ly="12" esld:flip="true">
			<TransformerWinding type="PTW" name="W1"/>
		</PowerTransformer>
		<PowerTransformer type="PTR" name="PTR1" esld:x="4" esld:y="10" esld:lx="5" esld:ly="10.5">
			<TransformerWinding type="PTW" name="W1">
				<Terminal esld:uuid="1d87e1ae-69d4-4458-b0ce-2de219007b84" name="T1" connectivityNode="S1/V1/B1/L2" substationName="S1" voltageLevelName="V1" bayName="B1" cNodeName="L2"/>
			</TransformerWinding>
			<TransformerWinding type="PTW" name="W2">
				<Terminal esld:uuid="4401145a-3204-433b-b05c-1dd2a39e38ed" name="T1" connectivityNode="S1/V2/B1/L1" substationName="S1" voltageLevelName="V2" bayName="B1" cNodeName="L1"/>
			</TransformerWinding>
		</PowerTransformer>
		<VoltageLevel name="V2" esld:x="1" esld:y="12" esld:lx="1" esld:ly="12" esld:w="38" esld:h="12">
			<Bay name="B17" esld:x="6" esld:y="19" esld:lx="6" esld:ly="19" esld:w="3" esld:h="4">
				<PowerTransformer type="PTR" esld:kind="auto" esld:rot="3" name="PTR1" esld:x="7" esld:y="21" esld:lx="5" esld:ly="23" esld:flip="true">
					<TransformerWinding type="PTW" name="W1">
						<NeutralPoint name="N2" cNodeName="grounded" substationName="S1" voltageLevelName="V2" bayName="B17" connectivityNode="S1/V2/B17/grounded"/>
					</TransformerWinding>
				</PowerTransformer>
				<ConnectivityNode name="grounded" pathName="S1/V2/B17/grounded"/>
			</Bay>
			<Bay name="B16" esld:x="6" esld:y="13" esld:lx="6" esld:ly="13" esld:w="3" esld:h="5">
				<PowerTransformer type="PTR" name="PTR1" esld:x="7" esld:y="14" esld:lx="8.5" esld:ly="14">
					<TransformerWinding type="PTW" name="W1">
						<Terminal esld:uuid="be05871d-9cc0-4104-8873-32db5922b5b2" name="T1" connectivityNode="S1/V1/BB1/L" substationName="S1" voltageLevelName="V1" bayName="BB1" cNodeName="L"/>
					</TransformerWinding>
					<TransformerWinding type="PTW" name="W2">
						<Terminal esld:uuid="14f7ae8e-873d-4327-a3fb-87877cf41a11" name="T1" connectivityNode="S1/V2/B16/L1" substationName="S1" voltageLevelName="V2" bayName="B16" cNodeName="L1"/>
					</TransformerWinding>
					<TransformerWinding type="PTW" name="W3">
						<Terminal esld:uuid="bfc718aa-74d4-4d3f-ad52-6bf99825332e" name="T1" connectivityNode="S1/V2/B1/L2" substationName="S1" voltageLevelName="V2" bayName="B1" cNodeName="L2"/>
						<TapChanger name="LTC" type="LTC"/>
					</TransformerWinding>
				</PowerTransformer>
				<ConductingEquipment type="MOT" name="MOT1" esld:x="8" esld:y="17" esld:lx="9" esld:ly="18">
					<Terminal esld:uuid="5e35a0eb-5740-4cd1-916d-c4794755ed72" name="T1" connectivityNode="S1/V2/B16/L1" substationName="S1" voltageLevelName="V2" bayName="B16" cNodeName="L1"/>
				</ConductingEquipment>
				<ConnectivityNode name="L1" pathName="S1/V2/B16/L1">
					<Private type="Transpower-SLD-Vertices">
						<esld:Section>
							<esld:Vertex esld:x="8.7" esld:y="15.5" esld:uuid="14f7ae8e-873d-4327-a3fb-87877cf41a11"/>
							<esld:Vertex esld:x="8.5" esld:y="15.5"/>
							<esld:Vertex esld:x="8.5" esld:y="17.16" esld:uuid="5e35a0eb-5740-4cd1-916d-c4794755ed72"/>
						</esld:Section>
					</Private>
				</ConnectivityNode>
			</Bay>
			<Bay name="B15" esld:x="10" esld:y="13" esld:lx="10" esld:ly="13" esld:w="3" esld:h="5">
				<PowerTransformer type="PTR" name="PTR1" esld:x="11" esld:y="15" esld:lx="11.5" esld:ly="15">
					<TransformerWinding type="PTW" name="W1"/>
					<TransformerWinding type="PTW" name="W2"/>
				</PowerTransformer>
			</Bay>
			<Bay name="B14" esld:x="14" esld:y="19" esld:lx="14" esld:ly="19" esld:w="3" esld:h="4">
				<PowerTransformer type="PTR" esld:kind="earthing" name="PTR1" esld:x="15" esld:y="20" esld:lx="16.5" esld:ly="20">
					<TransformerWinding type="PTW" name="W1"/>
				</PowerTransformer>
			</Bay>
			<Bay name="B13" esld:x="14" esld:y="13" esld:lx="14" esld:ly="13" esld:w="3" esld:h="5">
				<PowerTransformer type="PTR" name="PTR1" esld:x="15" esld:y="14" esld:lx="16.5" esld:ly="14">
					<TransformerWinding type="PTW" name="W1">
						<NeutralPoint name="N2" cNodeName="grounded" substationName="S1" voltageLevelName="V2" bayName="B13" connectivityNode="S1/V2/B13/grounded"/>
					</TransformerWinding>
					<TransformerWinding type="PTW" name="W2">
						<Terminal esld:uuid="b6f86fef-1da9-4eef-8ffa-99c0021e92f5" name="T1" connectivityNode="S1/V2/B13/L1" substationName="S1" voltageLevelName="V2" bayName="B13" cNodeName="L1"/>
						<NeutralPoint name="N1" cNodeName="grounded" substationName="S1" voltageLevelName="V2" bayName="B13" connectivityNode="S1/V2/B13/grounded"/>
					</TransformerWinding>
				</PowerTransformer>
				<ConductingEquipment type="VTR" name="VTR1" esld:x="15" esld:y="17" esld:lx="16" esld:ly="18">
					<Terminal esld:uuid="14d64a4d-9182-4ca3-a67f-28b56ce4e678" name="T1" connectivityNode="S1/V2/B13/L1" substationName="S1" voltageLevelName="V2" bayName="B13" cNodeName="L1"/>
				</ConductingEquipment>
				<ConnectivityNode name="L1" pathName="S1/V2/B13/L1">
					<Private type="Transpower-SLD-Vertices">
						<esld:Section>
							<esld:Vertex esld:x="15.5" esld:y="16.2" esld:uuid="b6f86fef-1da9-4eef-8ffa-99c0021e92f5"/>
							<esld:Vertex esld:x="15.5" esld:y="17.16" esld:uuid="14d64a4d-9182-4ca3-a67f-28b56ce4e678"/>
						</esld:Section>
					</Private>
				</ConnectivityNode>
				<ConnectivityNode name="grounded" pathName="S1/V2/B13/grounded"/>
			</Bay>
			<Bay name="B12" esld:x="18" esld:y="13" esld:lx="18" esld:ly="13" esld:w="3" esld:h="5">
				<PowerTransformer type="PTR" name="PTR1" esld:x="19" esld:y="14" esld:lx="20.5" esld:ly="14">
					<TransformerWinding type="PTW" name="W1">
						<NeutralPoint name="N1" cNodeName="grounded" substationName="S1" voltageLevelName="V2" bayName="B12" connectivityNode="S1/V2/B12/grounded"/>
					</TransformerWinding>
					<TransformerWinding type="PTW" name="W2">
						<Terminal esld:uuid="6cde954b-3994-4f20-acc2-c1afb7e4f605" name="T1" connectivityNode="S1/V2/B12/L1" substationName="S1" voltageLevelName="V2" bayName="B12" cNodeName="L1"/>
						<NeutralPoint name="N2" cNodeName="grounded" substationName="S1" voltageLevelName="V2" bayName="B12" connectivityNode="S1/V2/B12/grounded"/>
					</TransformerWinding>
				</PowerTransformer>
				<ConductingEquipment type="RES" name="RES1" esld:x="19" esld:y="17" esld:lx="20" esld:ly="18">
					<Terminal esld:uuid="8a7474e0-3215-4f75-881a-eeb4ede51744" name="T1" connectivityNode="S1/V2/B12/L1" substationName="S1" voltageLevelName="V2" bayName="B12" cNodeName="L1"/>
				</ConductingEquipment>
				<ConnectivityNode name="L1" pathName="S1/V2/B12/L1">
					<Private type="Transpower-SLD-Vertices">
						<esld:Section>
							<esld:Vertex esld:x="19.5" esld:y="16.2" esld:uuid="6cde954b-3994-4f20-acc2-c1afb7e4f605"/>
							<esld:Vertex esld:x="19.5" esld:y="17.16" esld:uuid="8a7474e0-3215-4f75-881a-eeb4ede51744"/>
						</esld:Section>
					</Private>
				</ConnectivityNode>
				<ConnectivityNode name="grounded" pathName="S1/V2/B12/grounded"/>
			</Bay>
			<Bay name="B11" esld:x="18" esld:y="19" esld:lx="18" esld:ly="19" esld:w="3" esld:h="4">
				<PowerTransformer type="PTR" esld:kind="auto" name="PTR1" esld:x="19" esld:y="20" esld:lx="20.5" esld:ly="20">
					<TransformerWinding type="PTW" name="W1"/>
					<TransformerWinding type="PTW" name="W2"/>
				</PowerTransformer>
			</Bay>
			<Bay name="B10" esld:x="22" esld:y="18" esld:lx="23" esld:ly="19" esld:w="3" esld:h="5">
				<PowerTransformer type="PTR" esld:kind="auto" name="PTR1" esld:x="23" esld:y="20" esld:lx="24.5" esld:ly="20">
					<TransformerWinding type="PTW" name="W1">
						<Terminal esld:uuid="be6d1366-734a-4d8c-9bed-1be2a28e9474" name="T1" connectivityNode="S1/V2/B4/L1" substationName="S1" voltageLevelName="V2" bayName="B4" cNodeName="L1"/>
					</TransformerWinding>
					<TransformerWinding type="PTW" name="W2">
						<NeutralPoint name="N1" cNodeName="grounded" substationName="S1" voltageLevelName="V2" bayName="B10" connectivityNode="S1/V2/B10/grounded"/>
					</TransformerWinding>
				</PowerTransformer>
				<ConnectivityNode name="grounded" pathName="S1/V2/B10/grounded"/>
			</Bay>
			<Bay name="B9" esld:x="26" esld:y="13" esld:lx="27" esld:ly="13.5" esld:w="4" esld:h="4">
				<PowerTransformer type="PTR" esld:kind="auto" name="PTR1" esld:x="28" esld:y="14" esld:lx="29.5" esld:ly="14">
					<TransformerWinding type="PTW" name="W1">
						<Terminal esld:uuid="6211e04f-4490-4412-a2cd-f548d0f54bdc" name="T2" connectivityNode="S1/V2/B9/L1" substationName="S1" voltageLevelName="V2" bayName="B9" cNodeName="L1"/>
						<Terminal esld:uuid="4d90bee1-3921-4da6-83ed-2e48da100f8f" name="T1" connectivityNode="S1/V2/B5/L2" substationName="S1" voltageLevelName="V2" bayName="B5" cNodeName="L2"/>
					</TransformerWinding>
					<TransformerWinding type="PTW" name="W2">
						<Terminal esld:uuid="3149cc24-9731-496c-a58f-c7f02818c7cc" name="T1" connectivityNode="S1/V2/B9/L2" substationName="S1" voltageLevelName="V2" bayName="B9" cNodeName="L2"/>
					</TransformerWinding>
				</PowerTransformer>
				<ConnectivityNode name="L2" pathName="S1/V2/B9/L2">
					<Private type="Transpower-SLD-Vertices">
						<esld:Section>
							<esld:Vertex esld:x="28.5" esld:y="16.2" esld:uuid="3149cc24-9731-496c-a58f-c7f02818c7cc"/>
							<esld:Vertex esld:x="28.5" esld:y="17.5"/>
							<esld:Vertex esld:x="23.5" esld:y="17.5"/>
							<esld:Vertex esld:x="23.5" esld:y="16.84" esld:uuid="0d283d83-476b-4310-9b74-a0c537d0ffd1"/>
						</esld:Section>
					</Private>
				</ConnectivityNode>
				<ConnectivityNode name="L1" pathName="S1/V2/B9/L1">
					<Private type="Transpower-SLD-Vertices">
						<esld:Section>
							<esld:Vertex esld:x="27.3" esld:y="14.5" esld:uuid="6211e04f-4490-4412-a2cd-f548d0f54bdc"/>
							<esld:Vertex esld:x="27" esld:y="14.5"/>
							<esld:Vertex esld:x="27" esld:y="13.5"/>
							<esld:Vertex esld:x="23.5" esld:y="13.5"/>
							<esld:Vertex esld:x="23.5" esld:y="14.16" esld:uuid="bc30ce8b-4d41-42dc-9c15-940bfa376686"/>
						</esld:Section>
					</Private>
				</ConnectivityNode>
			</Bay>
			<Bay name="B8" esld:x="31" esld:y="13" esld:lx="31.5" esld:ly="13.5" esld:w="3" esld:h="3">
				<PowerTransformer type="PTR" esld:kind="auto" esld:rot="3" name="PTR1" esld:x="32" esld:y="14" esld:lx="32" esld:ly="14">
					<TransformerWinding type="PTW" name="W1">
						<Terminal esld:uuid="43e12136-b0b7-455a-b498-6582a7db7337" name="T1" connectivityNode="S1/V2/B5/L2" substationName="S1" voltageLevelName="V2" bayName="B5" cNodeName="L2"/>
						<Terminal esld:uuid="0f5115ed-d4af-4513-9b5a-df51a3372f6a" name="T2" connectivityNode="S1/V2/B7/L1" substationName="S1" voltageLevelName="V2" bayName="B7" cNodeName="L1"/>
						<NeutralPoint name="N1" cNodeName="grounded" substationName="S1" voltageLevelName="V2" bayName="B8" connectivityNode="S1/V2/B8/grounded"/>
					</TransformerWinding>
				</PowerTransformer>
				<ConnectivityNode name="grounded" pathName="S1/V2/B8/grounded"/>
			</Bay>
			<Bay name="B7" esld:x="35" esld:y="13" esld:lx="35.5" esld:ly="13.5" esld:w="3" esld:h="3">
				<PowerTransformer type="PTR" esld:kind="earthing" name="PTR2" esld:x="36" esld:y="14" esld:lx="37.5" esld:ly="14" esld:rot="3">
					<TransformerWinding type="PTW" name="W1">
						<Terminal esld:uuid="4dd551e9-af5e-4993-a5d1-8b3d999a993b" name="T1" connectivityNode="S1/V2/B7/L1" substationName="S1" voltageLevelName="V2" bayName="B7" cNodeName="L1"/>
						<NeutralPoint name="N1" cNodeName="grounded" substationName="S1" voltageLevelName="V2" bayName="B7" connectivityNode="S1/V2/B7/grounded"/>
					</TransformerWinding>
				</PowerTransformer>
				<ConnectivityNode name="L1" pathName="S1/V2/B7/L1">
					<Private type="Transpower-SLD-Vertices">
						<esld:Section>
							<esld:Vertex esld:x="35.8" esld:y="14.5" esld:uuid="4dd551e9-af5e-4993-a5d1-8b3d999a993b"/>
							<esld:Vertex esld:x="35.5" esld:y="14.5"/>
						</esld:Section>
						<esld:Section>
							<esld:Vertex esld:x="33.2" esld:y="14.5" esld:uuid="0f5115ed-d4af-4513-9b5a-df51a3372f6a"/>
							<esld:Vertex esld:x="35.5" esld:y="14.5"/>
						</esld:Section>
						<esld:Section>
							<esld:Vertex esld:x="35.5" esld:y="14.5"/>
							<esld:Vertex esld:x="35.5" esld:y="15.5"/>
							<esld:Vertex esld:x="36.5" esld:y="15.5"/>
							<esld:Vertex esld:x="36.5" esld:y="18.16" esld:uuid="f613295f-e6bb-4c72-8cd1-56dd503e3f46"/>
						</esld:Section>
					</Private>
				</ConnectivityNode>
				<ConnectivityNode name="grounded" pathName="S1/V2/B7/grounded"/>
			</Bay>
			<Bay name="B6" esld:x="31" esld:y="18" esld:lx="32" esld:ly="19" esld:w="3" esld:h="5">
				<ConductingEquipment type="REA" name="REA1" esld:x="32" esld:y="21" esld:lx="32.5" esld:ly="21">
					<Terminal name="T2" cNodeName="grounded" substationName="S1" voltageLevelName="V2" bayName="B6" connectivityNode="S1/V2/B6/grounded"/>
					<Terminal name="T1" cNodeName="grounded" substationName="S1" voltageLevelName="V2" bayName="B6" connectivityNode="S1/V2/B6/grounded"/>
				</ConductingEquipment>
				<ConnectivityNode name="grounded" pathName="S1/V2/B6/grounded"/>
			</Bay>
			<Bay name="B5" esld:x="35" esld:y="17" esld:lx="36" esld:ly="18" esld:w="3" esld:h="6">
				<PowerTransformer type="PTR" esld:kind="earthing" name="PTR1" esld:x="36" esld:y="20" esld:lx="35" esld:ly="20.5" esld:flip="true">
					<TransformerWinding type="PTW" name="W1">
						<Terminal esld:uuid="f8e326da-ee33-4c05-b031-1891e4fc1031" name="T1" connectivityNode="S1/V2/B5/L1" substationName="S1" voltageLevelName="V2" bayName="B5" cNodeName="L1"/>
						<NeutralPoint name="N1" cNodeName="grounded" substationName="S1" voltageLevelName="V2" bayName="B5" connectivityNode="S1/V2/B5/grounded"/>
					</TransformerWinding>
					<TransformerWinding type="PTW" name="W2">
						<Terminal esld:uuid="f292c768-91b8-4a4c-835d-a8b1efe37ea9" name="T1" connectivityNode="S1/V2/B5/L2" substationName="S1" voltageLevelName="V2" bayName="B5" cNodeName="L2"/>
					</TransformerWinding>
				</PowerTransformer>
				<ConductingEquipment type="DIS" name="DIS1" esld:x="36" esld:y="18" esld:lx="36.5" esld:ly="19">
					<Terminal esld:uuid="f613295f-e6bb-4c72-8cd1-56dd503e3f46" name="T1" connectivityNode="S1/V2/B7/L1" substationName="S1" voltageLevelName="V2" bayName="B7" cNodeName="L1"/>
					<Terminal esld:uuid="70370296-c115-46b4-b4f5-39c331220192" name="T2" connectivityNode="S1/V2/B5/L1" substationName="S1" voltageLevelName="V2" bayName="B5" cNodeName="L1"/>
				</ConductingEquipment>
				<ConnectivityNode name="L1" pathName="S1/V2/B5/L1">
					<Private type="Transpower-SLD-Vertices">
						<esld:Section>
							<esld:Vertex esld:x="37.2" esld:y="20.5" esld:uuid="f8e326da-ee33-4c05-b031-1891e4fc1031"/>
							<esld:Vertex esld:x="37.5" esld:y="20.5"/>
							<esld:Vertex esld:x="37.5" esld:y="19.5"/>
							<esld:Vertex esld:x="36.5" esld:y="19.5"/>
							<esld:Vertex esld:x="36.5" esld:y="18.84" esld:uuid="70370296-c115-46b4-b4f5-39c331220192"/>
						</esld:Section>
					</Private>
				</ConnectivityNode>
				<ConnectivityNode name="L2" pathName="S1/V2/B5/L2">
					<Private type="Transpower-SLD-Vertices">
						<esld:Section>
							<esld:Vertex esld:x="36.5" esld:y="22.2" esld:uuid="f292c768-91b8-4a4c-835d-a8b1efe37ea9"/>
							<esld:Vertex esld:x="36.5" esld:y="22.5"/>
							<esld:Vertex esld:x="34.5" esld:y="22.5"/>
							<esld:Vertex esld:x="34.5" esld:y="19"/>
							<esld:Vertex esld:x="31.5" esld:y="19"/>
						</esld:Section>
						<esld:Section>
							<esld:Vertex esld:x="31.3" esld:y="14.5" esld:uuid="43e12136-b0b7-455a-b498-6582a7db7337"/>
							<esld:Vertex esld:x="31.5" esld:y="14.5"/>
						</esld:Section>
						<esld:Section>
							<esld:Vertex esld:x="31.5" esld:y="14.5"/>
							<esld:Vertex esld:x="31.5" esld:y="19"/>
						</esld:Section>
						<esld:Section>
							<esld:Vertex esld:x="31.5" esld:y="19"/>
							<esld:Vertex esld:x="28.5" esld:y="19"/>
							<esld:Vertex esld:x="28.5" esld:y="19.16" esld:uuid="d3c91349-259f-4144-8eaa-d4b13ec51df0"/>
						</esld:Section>
						<esld:Section>
							<esld:Vertex esld:x="29.2" esld:y="14.5" esld:uuid="4d90bee1-3921-4da6-83ed-2e48da100f8f"/>
							<esld:Vertex esld:x="31.5" esld:y="14.5"/>
						</esld:Section>
					</Private>
				</ConnectivityNode>
				<ConnectivityNode name="grounded" pathName="S1/V2/B5/grounded"/>
			</Bay>
			<Bay name="B4" esld:x="26" esld:y="18" esld:lx="26.5" esld:ly="19" esld:w="4" esld:h="5">
				<PowerTransformer type="PTR" esld:kind="earthing" name="PTR1" esld:x="28" esld:y="21" esld:lx="26.5" esld:ly="23">
					<TransformerWinding type="PTW" name="W1">
						<Terminal esld:uuid="5473457a-6106-47e7-b12e-25a1e47e345f" name="T1" connectivityNode="S1/V2/B4/L1" substationName="S1" voltageLevelName="V2" bayName="B4" cNodeName="L1"/>
						<NeutralPoint name="N1" cNodeName="grounded" substationName="S1" voltageLevelName="V2" bayName="B4" connectivityNode="S1/V2/B4/grounded"/>
					</TransformerWinding>
				</PowerTransformer>
				<ConductingEquipment type="CAB" name="CAB1" esld:x="28" esld:y="19" esld:lx="29" esld:ly="20">
					<Terminal esld:uuid="d3c91349-259f-4144-8eaa-d4b13ec51df0" name="T1" connectivityNode="S1/V2/B5/L2" substationName="S1" voltageLevelName="V2" bayName="B5" cNodeName="L2"/>
					<Terminal esld:uuid="82b0ec52-30cb-4c9b-9e26-2280b40ed084" name="T2" connectivityNode="S1/V2/B4/L1" substationName="S1" voltageLevelName="V2" bayName="B4" cNodeName="L1"/>
				</ConductingEquipment>
				<ConnectivityNode name="L1" pathName="S1/V2/B4/L1">
					<Private type="Transpower-SLD-Vertices">
						<esld:Section>
							<esld:Vertex esld:x="28.5" esld:y="20.8" esld:uuid="5473457a-6106-47e7-b12e-25a1e47e345f"/>
							<esld:Vertex esld:x="28.5" esld:y="20.5"/>
						</esld:Section>
						<esld:Section>
							<esld:Vertex esld:x="24.2" esld:y="20.5" esld:uuid="be6d1366-734a-4d8c-9bed-1be2a28e9474"/>
							<esld:Vertex esld:x="28.5" esld:y="20.5"/>
						</esld:Section>
						<esld:Section>
							<esld:Vertex esld:x="28.5" esld:y="20.5"/>
							<esld:Vertex esld:x="28.5" esld:y="19.84" esld:uuid="82b0ec52-30cb-4c9b-9e26-2280b40ed084"/>
						</esld:Section>
					</Private>
				</ConnectivityNode>
				<ConnectivityNode name="grounded" pathName="S1/V2/B4/grounded"/>
			</Bay>
			<Bay name="B3" esld:x="22" esld:y="13" esld:lx="23" esld:ly="13.5" esld:w="3" esld:h="4">
				<ConductingEquipment type="CAP" name="CAP1" esld:x="23" esld:y="16" esld:lx="23.5" esld:ly="16.5">
					<Terminal esld:uuid="0d283d83-476b-4310-9b74-a0c537d0ffd1" name="T2" connectivityNode="S1/V2/B9/L2" substationName="S1" voltageLevelName="V2" bayName="B9" cNodeName="L2"/>
					<Terminal esld:uuid="1fb43f1b-2a4b-4ad3-b6b6-187ee4945939" name="T1" connectivityNode="S1/V2/B3/L1" substationName="S1" voltageLevelName="V2" bayName="B3" cNodeName="L1"/>
				</ConductingEquipment>
				<ConductingEquipment type="CTR" name="CTR1" esld:x="23" esld:y="14" esld:lx="23.5" esld:ly="14.5">
					<Terminal esld:uuid="76b5dd8b-527f-4844-820d-77691f8c6c8d" name="T2" connectivityNode="S1/V2/B3/L1" substationName="S1" voltageLevelName="V2" bayName="B3" cNodeName="L1"/>
					<Terminal esld:uuid="bc30ce8b-4d41-42dc-9c15-940bfa376686" name="T1" connectivityNode="S1/V2/B9/L1" substationName="S1" voltageLevelName="V2" bayName="B9" cNodeName="L1"/>
				</ConductingEquipment>
				<ConnectivityNode name="L1" pathName="S1/V2/B3/L1">
					<Private type="Transpower-SLD-Vertices">
						<esld:Section>
							<esld:Vertex esld:x="23.5" esld:y="16.16" esld:uuid="1fb43f1b-2a4b-4ad3-b6b6-187ee4945939"/>
							<esld:Vertex esld:x="23.5" esld:y="14.84" esld:uuid="76b5dd8b-527f-4844-820d-77691f8c6c8d"/>
						</esld:Section>
					</Private>
				</ConnectivityNode>
			</Bay>
			<Bay name="B2" esld:x="10" esld:y="19" esld:lx="10" esld:ly="19" esld:w="3" esld:h="4">
				<ConductingEquipment type="IFL" name="IFL1" esld:x="11" esld:y="22" esld:lx="12" esld:ly="23">
					<Terminal esld:uuid="7a40a33a-8242-4a32-9e30-9df019301389" name="T1" connectivityNode="S1/V2/B2/L2" substationName="S1" voltageLevelName="V2" bayName="B2" cNodeName="L2"/>
				</ConductingEquipment>
				<ConductingEquipment type="LIN" name="LIN1" esld:x="11" esld:y="20" esld:lx="12" esld:ly="21">
					<Terminal esld:uuid="2c740e2d-f845-4cbc-ab53-b40393a307b9" name="T2" connectivityNode="S1/V2/B2/L2" substationName="S1" voltageLevelName="V2" bayName="B2" cNodeName="L2"/>
					<Terminal esld:uuid="32691b2e-a66e-4725-8b45-ccad28a32f11" name="T1" connectivityNode="S1/V2/B2/L1" substationName="S1" voltageLevelName="V2" bayName="B2" cNodeName="L1"/>
				</ConductingEquipment>
				<ConductingEquipment type="REA" name="REA1" esld:x="11" esld:y="19" esld:lx="12" esld:ly="20">
					<Terminal esld:uuid="0b571655-fe81-4319-b518-2a9aa1d29522" name="T2" connectivityNode="S1/V2/B2/L1" substationName="S1" voltageLevelName="V2" bayName="B2" cNodeName="L1"/>
				</ConductingEquipment>
				<ConnectivityNode name="L2" pathName="S1/V2/B2/L2">
					<Private type="Transpower-SLD-Vertices">
						<esld:Section>
							<esld:Vertex esld:x="11.5" esld:y="22.16" esld:uuid="7a40a33a-8242-4a32-9e30-9df019301389"/>
							<esld:Vertex esld:x="11.5" esld:y="20.84" esld:uuid="2c740e2d-f845-4cbc-ab53-b40393a307b9"/>
						</esld:Section>
					</Private>
				</ConnectivityNode>
				<ConnectivityNode name="L1" pathName="S1/V2/B2/L1">
					<Private type="Transpower-SLD-Vertices">
						<esld:Section>
							<esld:Vertex esld:x="11.5" esld:y="19.84" esld:uuid="0b571655-fe81-4319-b518-2a9aa1d29522"/>
							<esld:Vertex esld:x="11.5" esld:y="20.16" esld:uuid="32691b2e-a66e-4725-8b45-ccad28a32f11"/>
						</esld:Section>
					</Private>
				</ConnectivityNode>
			</Bay>
			<Bay name="B1" esld:x="2" esld:y="13" esld:lx="2" esld:ly="13" esld:w="3" esld:h="5">
				<ConductingEquipment type="IFL" name="IFL1" esld:x="3" esld:y="16" esld:lx="4" esld:ly="17">
					<Terminal esld:uuid="6426d684-6061-4b23-a29e-b13751e3f5f8" name="T1" connectivityNode="S1/V2/B1/L2" substationName="S1" voltageLevelName="V2" bayName="B1" cNodeName="L2"/>
				</ConductingEquipment>
				<ConductingEquipment xmlns="http://www.iec.ch/61850/2003/SCL" type="EQA" name="DIS1" a0:x="3" xmlns:a0="https://transpower.co.nz/SCL/SSD/SLD/v0" a0:y="14" a0:lx="4" a0:ly="15">
					<Terminal esld:uuid="166d0b1d-0070-4823-9d03-a730d8078719" name="T2" connectivityNode="S1/V2/B1/L2" substationName="S1" voltageLevelName="V2" bayName="B1" cNodeName="L2"/>
					<Terminal esld:uuid="dae5c837-ddfe-495a-a483-c8f145da4388" name="T1" connectivityNode="S1/V2/B1/L1" substationName="S1" voltageLevelName="V2" bayName="B1" cNodeName="L1"/>
				</ConductingEquipment>
				<ConnectivityNode name="L2" pathName="S1/V2/B1/L2">
					<Private type="Transpower-SLD-Vertices">
						<esld:Section>
							<esld:Vertex esld:x="3.5" esld:y="16.16" esld:uuid="6426d684-6061-4b23-a29e-b13751e3f5f8"/>
							<esld:Vertex esld:x="3.5" esld:y="15.5"/>
						</esld:Section>
						<esld:Section>
							<esld:Vertex esld:x="6.3" esld:y="15.5" esld:uuid="bfc718aa-74d4-4d3f-ad52-6bf99825332e"/>
							<esld:Vertex esld:x="3.5" esld:y="15.5"/>
						</esld:Section>
						<esld:Section>
							<esld:Vertex esld:x="3.5" esld:y="15.5"/>
							<esld:Vertex esld:x="3.5" esld:y="14.84" esld:uuid="166d0b1d-0070-4823-9d03-a730d8078719"/>
						</esld:Section>
					</Private>
				</ConnectivityNode>
				<ConnectivityNode name="L1" pathName="S1/V2/B1/L1">
					<Private type="Transpower-SLD-Vertices">
						<esld:Section>
							<esld:Vertex esld:x="4.5" esld:y="12.2" esld:uuid="4401145a-3204-433b-b05c-1dd2a39e38ed"/>
							<esld:Vertex esld:x="4.5" esld:y="13.5"/>
							<esld:Vertex esld:x="3.5" esld:y="13.5"/>
							<esld:Vertex esld:x="3.5" esld:y="14.16" esld:uuid="dae5c837-ddfe-495a-a483-c8f145da4388"/>
						</esld:Section>
					</Private>
				</ConnectivityNode>
				<ConnectivityNode name="grounded" pathName="S1/V2/B1/grounded"/>
			</Bay>
		</VoltageLevel>
		<VoltageLevel name="V1" esld:x="1" esld:y="1" esld:lx="1.5" esld:ly="1.5" esld:w="38" esld:h="8">
			<PowerTransformer type="PTR" esld:kind="earthing" name="PTR2" esld:x="31" esld:y="5" esld:lx="29" esld:ly="7.5">
				<TransformerWinding type="PTW" name="W1"/>
				<TransformerWinding type="PTW" name="W2"/>
			</PowerTransformer>
			<Bay name="B6" esld:x="25" esld:y="2" esld:lx="25" esld:ly="2" esld:w="3" esld:h="5">
				<PowerTransformer type="PTR" name="PTR1" esld:x="26" esld:y="3" esld:lx="27.5" esld:ly="3">
					<TransformerWinding type="PTW" name="W1">
						<Terminal esld:uuid="e1de6e70-70b5-4d3e-a969-13c8bb25b3c5" name="T1" connectivityNode="S1/V1/BB1/L" substationName="S1" voltageLevelName="V1" bayName="BB1" cNodeName="L"/>
						<NeutralPoint name="N1" cNodeName="grounded" substationName="S1" voltageLevelName="V1" bayName="B6" connectivityNode="S1/V1/B6/grounded"/>
					</TransformerWinding>
					<TransformerWinding type="PTW" name="W2"/>
					<TransformerWinding type="PTW" name="W3">
						<NeutralPoint name="N1" cNodeName="grounded" substationName="S1" voltageLevelName="V1" bayName="B6" connectivityNode="S1/V1/B6/grounded"/>
					</TransformerWinding>
				</PowerTransformer>
				<ConnectivityNode name="grounded" pathName="S1/V1/B6/grounded"/>
			</Bay>
			<Bay name="B5" esld:x="21" esld:y="2" esld:lx="21.5" esld:ly="3" esld:w="3" esld:h="5">
				<PowerTransformer type="PTR" name="PTR1" esld:x="22" esld:y="3" esld:lx="23.5" esld:ly="3">
					<TransformerWinding type="PTW" name="W1">
						<TapChanger name="LTC" type="LTC"/>
						<NeutralPoint name="N2" cNodeName="grounded" substationName="S1" voltageLevelName="V1" bayName="B5" connectivityNode="S1/V1/B5/grounded"/>
					</TransformerWinding>
					<TransformerWinding type="PTW" name="W2">
						<NeutralPoint name="N1" cNodeName="grounded" substationName="S1" voltageLevelName="V1" bayName="B5" connectivityNode="S1/V1/B5/grounded"/>
					</TransformerWinding>
					<TransformerWinding type="PTW" name="W3"/>
				</PowerTransformer>
				<ConnectivityNode name="grounded" pathName="S1/V1/B5/grounded"/>
			</Bay>
			<Bay name="B4" esld:x="33" esld:y="2" esld:lx="34" esld:ly="3" esld:w="5" esld:h="6">
				<PowerTransformer type="PTR" esld:kind="auto" name="PTR1" esld:x="35" esld:y="5" esld:lx="36.5" esld:ly="5" esld:flip="true">
					<TransformerWinding type="PTW" name="W1">
						<Terminal esld:uuid="1020a12a-ffa2-4082-8399-bc356ed8af93" name="T1" connectivityNode="S1/V1/B4/L2" substationName="S1" voltageLevelName="V1" bayName="B4" cNodeName="L2"/>
						<Terminal esld:uuid="86739ce9-4d93-4868-98b7-eb0275bab4a6" name="T2" connectivityNode="S1/V1/BB1/L" substationName="S1" voltageLevelName="V1" bayName="BB1" cNodeName="L"/>
						<NeutralPoint name="N1" cNodeName="grounded" substationName="S1" voltageLevelName="V1" bayName="B4" connectivityNode="S1/V1/B4/grounded"/>
					</TransformerWinding>
					<TransformerWinding type="PTW" name="W2">
						<NeutralPoint name="N2" cNodeName="grounded" substationName="S1" voltageLevelName="V1" bayName="B4" connectivityNode="S1/V1/B4/grounded"/>
					</TransformerWinding>
				</PowerTransformer>
				<ConductingEquipment type="VTR" name="VTR1" esld:x="33" esld:y="6" esld:lx="34" esld:ly="7">
					<Terminal esld:uuid="1b6c84c2-3094-4a6a-9306-056a07efa66e" name="T1" connectivityNode="S1/V1/B4/L2" substationName="S1" voltageLevelName="V1" bayName="B4" cNodeName="L2"/>
				</ConductingEquipment>
				<ConnectivityNode name="L2" pathName="S1/V1/B4/L2">
					<Private type="Transpower-SLD-Vertices">
						<esld:Section>
							<esld:Vertex esld:x="34.8" esld:y="5.5" esld:uuid="1020a12a-ffa2-4082-8399-bc356ed8af93"/>
							<esld:Vertex esld:x="33.5" esld:y="5.5"/>
							<esld:Vertex esld:x="33.5" esld:y="6.16" esld:uuid="1b6c84c2-3094-4a6a-9306-056a07efa66e"/>
						</esld:Section>
					</Private>
				</ConnectivityNode>
				<ConnectivityNode name="grounded" pathName="S1/V1/B4/grounded"/>
			</Bay>
			<Bay name="B3" esld:x="15" esld:y="2" esld:lx="15.5" esld:ly="3" esld:w="5" esld:h="5">
				<PowerTransformer type="PTR" esld:kind="auto" name="PTR1" esld:x="17" esld:y="4" esld:lx="15.5" esld:ly="6.5">
					<TransformerWinding type="PTW" name="W1">
						<Terminal esld:uuid="f04956a5-a059-46fe-9c3c-d0d07f0d0a76" name="T1" connectivityNode="S1/V1/B3/L2" substationName="S1" voltageLevelName="V1" bayName="B3" cNodeName="L2"/>
						<TapChanger name="LTC" type="LTC"/>
						<NeutralPoint name="N1" cNodeName="grounded" substationName="S1" voltageLevelName="V1" bayName="B3" connectivityNode="S1/V1/B3/grounded"/>
					</TransformerWinding>
					<TransformerWinding type="PTW" name="W2">
						<NeutralPoint name="N2" cNodeName="grounded" substationName="S1" voltageLevelName="V1" bayName="B3" connectivityNode="S1/V1/B3/grounded"/>
					</TransformerWinding>
				</PowerTransformer>
				<ConductingEquipment type="GEN" name="GEN1" esld:x="19" esld:y="4" esld:lx="18.5" esld:ly="4">
					<Terminal esld:uuid="608900d4-db2d-48bc-8723-c4aa637989e0" name="T1" connectivityNode="S1/V1/B3/L2" substationName="S1" voltageLevelName="V1" bayName="B3" cNodeName="L2"/>
				</ConductingEquipment>
				<ConnectivityNode name="L2" pathName="S1/V1/B3/L2">
					<Private type="Transpower-SLD-Vertices">
						<esld:Section>
							<esld:Vertex esld:x="18.2" esld:y="4.5" esld:uuid="f04956a5-a059-46fe-9c3c-d0d07f0d0a76"/>
							<esld:Vertex esld:x="18.5" esld:y="4.5"/>
							<esld:Vertex esld:x="18.5" esld:y="4"/>
							<esld:Vertex esld:x="19.5" esld:y="4"/>
							<esld:Vertex esld:x="19.5" esld:y="4.16" esld:uuid="608900d4-db2d-48bc-8723-c4aa637989e0"/>
						</esld:Section>
					</Private>
				</ConnectivityNode>
				<ConnectivityNode name="grounded" pathName="S1/V1/B3/grounded"/>
			</Bay>
			<Bay name="B2" esld:x="9" esld:y="2" esld:lx="10" esld:ly="3" esld:w="5" esld:h="5">
				<ConductingEquipment type="REA" name="REA1" esld:x="12" esld:y="5" esld:lx="13" esld:ly="6" esld:flip="true">
					<Terminal esld:uuid="38e23327-f50e-44bd-ae1f-f8647c2419d6" name="T1" connectivityNode="S1/V1/B2/L1" substationName="S1" voltageLevelName="V1" bayName="B2" cNodeName="L1"/>
				</ConductingEquipment>
				<ConductingEquipment type="SAR" name="SAR1" esld:x="10" esld:y="5" esld:lx="9" esld:ly="6" esld:rot="1">
					<Terminal esld:uuid="ef7f016f-7432-4bbc-b7bb-0e2cd4e6de1e" name="T1" connectivityNode="S1/V1/B2/L1" substationName="S1" voltageLevelName="V1" bayName="B2" cNodeName="L1"/>
				</ConductingEquipment>
				<ConductingEquipment type="RES" name="RES1" esld:x="11" esld:y="3" esld:lx="12" esld:ly="4">
					<Terminal esld:uuid="4ca23eea-1c60-4306-ad04-f696b4dd4eb3" name="T1" connectivityNode="S1/V1/BB1/L" substationName="S1" voltageLevelName="V1" bayName="BB1" cNodeName="L"/>
					<Terminal esld:uuid="7a726ee4-029e-467a-91bb-e09ba2c014c4" name="T2" connectivityNode="S1/V1/B2/L1" substationName="S1" voltageLevelName="V1" bayName="B2" cNodeName="L1"/>
				</ConductingEquipment>
				<ConnectivityNode name="L1" pathName="S1/V1/B2/L1">
					<Private type="Transpower-SLD-Vertices">
						<esld:Section>
							<esld:Vertex esld:x="10.84" esld:y="5.5" esld:uuid="ef7f016f-7432-4bbc-b7bb-0e2cd4e6de1e"/>
							<esld:Vertex esld:x="11.5" esld:y="5.5"/>
							<esld:Vertex esld:x="11.5" esld:y="4.5"/>
						</esld:Section>
						<esld:Section>
							<esld:Vertex esld:x="12.5" esld:y="5.16" esld:uuid="38e23327-f50e-44bd-ae1f-f8647c2419d6"/>
							<esld:Vertex esld:x="12.5" esld:y="4.5"/>
							<esld:Vertex esld:x="11.5" esld:y="4.5"/>
						</esld:Section>
						<esld:Section>
							<esld:Vertex esld:x="11.5" esld:y="4.5"/>
							<esld:Vertex esld:x="11.5" esld:y="3.84" esld:uuid="7a726ee4-029e-467a-91bb-e09ba2c014c4"/>
						</esld:Section>
					</Private>
				</ConnectivityNode>
			</Bay>
			<Bay name="BB1" esld:w="36" esld:x="3" esld:y="1" esld:lx="37.5" esld:ly="2" esld:h="1">
				<ConnectivityNode name="L" pathName="S1/V1/BB1/L">
					<Private type="Transpower-SLD-Vertices">
						<esld:Section bus="true">
							<esld:Vertex esld:x="3.5" esld:y="1.5"/>
							<esld:Vertex esld:x="4.5" esld:y="1.5"/>
						</esld:Section>
						<esld:Section bus="true">
							<esld:Vertex esld:x="4.5" esld:y="1.5"/>
							<esld:Vertex esld:x="7.5" esld:y="1.5"/>
						</esld:Section>
						<esld:Section bus="true">
							<esld:Vertex esld:x="7.5" esld:y="1.5"/>
							<esld:Vertex esld:x="11.5" esld:y="1.5"/>
						</esld:Section>
						<esld:Section bus="true">
							<esld:Vertex esld:x="11.5" esld:y="1.5"/>
							<esld:Vertex esld:x="26.5" esld:y="1.5"/>
						</esld:Section>
						<esld:Section bus="true">
							<esld:Vertex esld:x="26.5" esld:y="1.5"/>
							<esld:Vertex esld:x="37" esld:y="1.5"/>
						</esld:Section>
						<esld:Section>
							<esld:Vertex esld:x="36.7" esld:y="5.5" esld:uuid="86739ce9-4d93-4868-98b7-eb0275bab4a6"/>
							<esld:Vertex esld:x="37" esld:y="5.5"/>
							<esld:Vertex esld:x="37" esld:y="1.5"/>
						</esld:Section>
						<esld:Section bus="true">
							<esld:Vertex esld:x="37" esld:y="1.5"/>
							<esld:Vertex esld:x="38.5" esld:y="1.5"/>
						</esld:Section>
						<esld:Section>
							<esld:Vertex esld:x="4.5" esld:y="3.16" esld:uuid="74e86f53-8538-4c4d-889e-78fbc5f42fb3"/>
							<esld:Vertex esld:x="4.5" esld:y="1.5"/>
						</esld:Section>
						<esld:Section>
							<esld:Vertex esld:x="7.5" esld:y="13.8" esld:uuid="be05871d-9cc0-4104-8873-32db5922b5b2"/>
							<esld:Vertex esld:x="7.5" esld:y="1.5"/>
						</esld:Section>
						<esld:Section>
							<esld:Vertex esld:x="26.5" esld:y="2.8" esld:uuid="e1de6e70-70b5-4d3e-a969-13c8bb25b3c5"/>
							<esld:Vertex esld:x="26.5" esld:y="1.5"/>
						</esld:Section>
						<esld:Section>
							<esld:Vertex esld:x="11.5" esld:y="3.16" esld:uuid="4ca23eea-1c60-4306-ad04-f696b4dd4eb3"/>
							<esld:Vertex esld:x="11.5" esld:y="1.5"/>
						</esld:Section>
					</Private>
				</ConnectivityNode>
			</Bay>
			<Bay name="B1" esld:x="2" esld:y="2" esld:lx="3" esld:ly="3" esld:w="5" esld:h="5">
				<ConductingEquipment type="VTR" name="VTR1" esld:x="3" esld:y="5" esld:lx="2" esld:ly="6">
					<Terminal esld:uuid="723999bb-f93d-49d4-88e0-0cd27926c714" name="T1" connectivityNode="S1/V1/B1/L1" substationName="S1" voltageLevelName="V1" bayName="B1" cNodeName="L1"/>
				</ConductingEquipment>
				<ConductingEquipment type="CBR" name="CBR1" esld:x="4" esld:y="5" esld:lx="3" esld:ly="7">
					<Terminal esld:uuid="4e0a859a-9746-4c1d-9640-22c59b849046" name="T2" connectivityNode="S1/V1/B1/L2" substationName="S1" voltageLevelName="V1" bayName="B1" cNodeName="L2"/>
					<Terminal esld:uuid="7b41e6f4-b6a1-4d20-91c7-88c2fd70928b" name="T1" connectivityNode="S1/V1/B1/L1" substationName="S1" voltageLevelName="V1" bayName="B1" cNodeName="L1"/>
				</ConductingEquipment>
				<ConductingEquipment type="DIS" name="DIS1" esld:x="4" esld:y="3" esld:lx="5" esld:ly="4">
					<Terminal esld:uuid="74e86f53-8538-4c4d-889e-78fbc5f42fb3" name="T1" connectivityNode="S1/V1/BB1/L" substationName="S1" voltageLevelName="V1" bayName="BB1" cNodeName="L"/>
					<Terminal esld:uuid="1d31994d-b992-45af-af44-91ae14addd92" name="T2" connectivityNode="S1/V1/B1/L1" substationName="S1" voltageLevelName="V1" bayName="B1" cNodeName="L1"/>
				</ConductingEquipment>
				<ConnectivityNode name="L2" pathName="S1/V1/B1/L2">
					<Private type="Transpower-SLD-Vertices">
						<esld:Section>
							<esld:Vertex esld:x="4.5" esld:y="9.8" esld:uuid="1d87e1ae-69d4-4458-b0ce-2de219007b84"/>
							<esld:Vertex esld:x="4.5" esld:y="5.84" esld:uuid="4e0a859a-9746-4c1d-9640-22c59b849046"/>
						</esld:Section>
					</Private>
				</ConnectivityNode>
				<ConnectivityNode name="L1" pathName="S1/V1/B1/L1">
					<Private type="Transpower-SLD-Vertices">
						<esld:Section>
							<esld:Vertex esld:x="4.5" esld:y="5.16" esld:uuid="7b41e6f4-b6a1-4d20-91c7-88c2fd70928b"/>
							<esld:Vertex esld:x="4.5" esld:y="4.5"/>
						</esld:Section>
						<esld:Section>
							<esld:Vertex esld:x="3.5" esld:y="5.16" esld:uuid="723999bb-f93d-49d4-88e0-0cd27926c714"/>
							<esld:Vertex esld:x="3.5" esld:y="4.5"/>
							<esld:Vertex esld:x="4.5" esld:y="4.5"/>
						</esld:Section>
						<esld:Section>
							<esld:Vertex esld:x="4.5" esld:y="4.5"/>
							<esld:Vertex esld:x="4.5" esld:y="3.84" esld:uuid="1d31994d-b992-45af-af44-91ae14addd92"/>
						</esld:Section>
					</Private>
				</ConnectivityNode>
			</Bay>
		</VoltageLevel>
	</Substation>
</SCL>`;

export const scd = `<?xml version="1.0" encoding="UTF-8"?>
<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B" release="4" xmlns:esld="https://transpower.co.nz/SCL/SSD/SLD/v0">
	<Header id="scd"/>
	<Substation name="S1" esld:w="30" esld:h="15">
		<VoltageLevel name="V2" esld:x="1" esld:y="8" esld:lx="1" esld:ly="8" esld:w="27" esld:h="6">
			<Bay name="B2" esld:x="17" esld:y="9" esld:lx="17" esld:ly="9" esld:w="10" esld:h="4"/>
			<Bay name="B1" esld:x="2" esld:y="9" esld:lx="2" esld:ly="9" esld:w="6" esld:h="4"/>
		</VoltageLevel>
		<VoltageLevel name="V1" esld:x="1" esld:y="2" esld:lx="1" esld:ly="2" esld:w="16" esld:h="5">
			<Bay name="B2" esld:x="9" esld:y="3" esld:lx="9" esld:ly="3" esld:w="6" esld:h="3"/>
			<Bay name="B1" esld:x="2" esld:y="3" esld:lx="2" esld:ly="3" esld:w="6" esld:h="3"/>
		</VoltageLevel>
	</Substation>
	<IED name="IED1" />
	<IED name="IED2" esld:x="4" esld:y="4" esld:lx="5" esld:ly="5" />
	<IED name="IED3" esld:x="10" esld:y="4" esld:lx="11" esld:ly="5" />
	<IED name="IED4" esld:x="4" esld:y="11" esld:lx="5" esld:ly="12" />
	<IED name="IED5" esld:x="19" esld:y="11" esld:lx="20" esld:ly="12" />
</SCL>`;

export const rpScd = `<?xml version="1.0" encoding="UTF-8"?>
<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B" release="4" xmlns:esld="https://transpower.co.nz/SCL/SSD/SLD/v0">
	<Header id="scd"/>
    <Substation name="AA1" esld:w="35" esld:h="25">
        <VoltageLevel name="E1" esld:x="1" esld:y="1" esld:lx="1" esld:ly="1" esld:w="25" esld:h="17">
            <Bay name="B6" esld:x="18" esld:y="10" esld:lx="18" esld:ly="10" esld:w="7" esld:h="7"/><Bay name="B5" esld:x="10" esld:y="10" esld:lx="10" esld:ly="10.5" esld:w="7" esld:h="7"/><Bay name="B4" esld:x="2" esld:y="10" esld:lx="2" esld:ly="10.5" esld:w="7" esld:h="7"/><Bay name="B3" esld:x="18" esld:y="2" esld:lx="18" esld:ly="2.5" esld:w="7" esld:h="7"/><Bay name="B2" esld:x="10" esld:y="2" esld:lx="10" esld:ly="2.5" esld:w="7" esld:h="7"/><Bay name="B1" esld:x="2" esld:y="2" esld:lx="2" esld:ly="2.5" esld:w="7" esld:h="7"/>
        </VoltageLevel>
    </Substation>
	<IED name="t1" esld:x="5" esld:y="5" esld:lx="6" esld:ly="6">
        <AccessPoint name="AP1">
            <LN lnClass="IHMI" inst="1"/>
        </AccessPoint>
    </IED>
	<IED name="s11" esld:x="3" esld:y="5" esld:lx="2" esld:ly="6">
        <AccessPoint name="AP1">
            <Server>
                <LDevice inst="lDevice">
                    <LN0 lnClass="LLN0" inst="">
                        <ReportControl name="rp1">
                            <RptEnabled>
                                <ClientLN iedName="t1"/>
                            </RptEnabled>
                        </ReportControl>
                        <ReportControl name="rp2">
                            <RptEnabled>
                                <ClientLN iedName="t1"/>
                            </RptEnabled>
                        </ReportControl>
                        <ReportControl name="rp3">
                            <RptEnabled>
                                <ClientLN iedName="t1"/>
                            </RptEnabled>
                        </ReportControl>
                    </LN0>
                </LDevice>
            </Server>
        </AccessPoint>
    </IED>
	<IED name="s12" esld:x="7" esld:y="5" esld:lx="8" esld:ly="6">
        <AccessPoint name="AP1">
            <Server>
                <LDevice inst="lDevice">
                    <LN0 lnClass="LLN0" inst="">
                        <ReportControl name="rp1">
                            <RptEnabled>
                                <ClientLN iedName="t1"/>
                            </RptEnabled>
                        </ReportControl>
                        <ReportControl name="rp2">
                            <RptEnabled>
                                <ClientLN iedName="t1"/>
                            </RptEnabled>
                        </ReportControl>
                        <ReportControl name="rp3">
                            <RptEnabled>
                                <ClientLN iedName="t1"/>
                            </RptEnabled>
                        </ReportControl>
                    </LN0>
                </LDevice>
            </Server>
        </AccessPoint>
    </IED>
	<IED name="s13" esld:x="5" esld:y="8" esld:lx="6" esld:ly="9">
        <AccessPoint name="AP1">
            <Server>
                <LDevice inst="lDevice">
                    <LN0 lnClass="LLN0" inst="">
                        <ReportControl name="rp1">
                            <RptEnabled>
                                <ClientLN iedName="t1"/>
                            </RptEnabled>
                        </ReportControl>
                        <ReportControl name="rp2">
                            <RptEnabled>
                                <ClientLN iedName="t1"/>
                            </RptEnabled>
                        </ReportControl>
                        <ReportControl name="rp3">
                            <RptEnabled>
                                <ClientLN iedName="t1"/>
                            </RptEnabled>
                        </ReportControl>
                    </LN0>
                </LDevice>
            </Server>
        </AccessPoint>
    </IED>
	<IED name="s14" esld:x="5" esld:y="2" esld:lx="6" esld:ly="3">
        <AccessPoint name="AP1">
            <Server>
                <LDevice inst="lDevice">
                    <LN0 lnClass="LLN0" inst="">
                        <ReportControl name="rp1">
                            <RptEnabled>
                                <ClientLN iedName="t1"/>
                            </RptEnabled>
                        </ReportControl>
                        <ReportControl name="rp2">
                            <RptEnabled>
                                <ClientLN iedName="t1"/>
                            </RptEnabled>
                        </ReportControl>
                        <ReportControl name="rp3">
                            <RptEnabled>
                                <ClientLN iedName="t1"/>
                            </RptEnabled>
                        </ReportControl>
                    </LN0>
                </LDevice>
            </Server>
        </AccessPoint>
    </IED>
    <IED name="t2" esld:x="13" esld:y="5" esld:lx="14" esld:ly="6">
        <AccessPoint name="AP1">
            <LN lnClass="IHMI" inst="1"/>
        </AccessPoint>
    </IED>
	<IED name="s21" esld:x="13" esld:y="2" esld:lx="14" esld:ly="3">
        <AccessPoint name="AP1">
            <Server>
                <LDevice inst="lDevice">
                    <LN0 lnClass="LLN0" inst="">
                        <ReportControl name="rp1">
                            <RptEnabled>
                                <ClientLN iedName="t2"/>
                            </RptEnabled>
                        </ReportControl>
                        <ReportControl name="rp2">
                            <RptEnabled>
                                <ClientLN iedName="t2"/>
                            </RptEnabled>
                        </ReportControl>
                        <ReportControl name="rp3">
                            <RptEnabled>
                                <ClientLN iedName="t2"/>
                            </RptEnabled>
                        </ReportControl>
                    </LN0>
                </LDevice>
            </Server>
        </AccessPoint>
    </IED>
    <IED name="s22" esld:x="14" esld:y="7" esld:lx="15" esld:ly="8">
        <AccessPoint name="AP1">
            <Server>
                <LDevice inst="lDevice">
                    <LN0 lnClass="LLN0" inst="">
                        <ReportControl name="rp1">
                            <RptEnabled>
                                <ClientLN iedName="t2"/>
                            </RptEnabled>
                        </ReportControl>
                        <ReportControl name="rp2">
                            <RptEnabled>
                                <ClientLN iedName="t2"/>
                            </RptEnabled>
                        </ReportControl>
                        <ReportControl name="rp3">
                            <RptEnabled>
                                <ClientLN iedName="t2"/>
                            </RptEnabled>
                        </ReportControl>
                    </LN0>
                </LDevice>
            </Server>
        </AccessPoint>
    </IED>
    <IED name="s23" esld:x="10" esld:y="8" esld:lx="11" esld:ly="9">
        <AccessPoint name="AP1">
            <Server>
                <LDevice inst="lDevice">
                    <LN0 lnClass="LLN0" inst="">
                        <ReportControl name="rp1">
                            <RptEnabled>
                                <ClientLN iedName="t2"/>
                            </RptEnabled>
                        </ReportControl>
                        <ReportControl name="rp2">
                            <RptEnabled>
                                <ClientLN iedName="t2"/>
                            </RptEnabled>
                        </ReportControl>
                        <ReportControl name="rp3">
                            <RptEnabled>
                                <ClientLN iedName="t2"/>
                            </RptEnabled>
                        </ReportControl>
                    </LN0>
                </LDevice>
            </Server>
        </AccessPoint>
    </IED>
    <IED name="s24" esld:x="13" esld:y="8" esld:lx="14" esld:ly="9">
        <AccessPoint name="AP1">
            <Server>
                <LDevice inst="lDevice">
                    <LN0 lnClass="LLN0" inst="">
                        <ReportControl name="rp1">
                            <RptEnabled>
                                <ClientLN iedName="t2"/>
                            </RptEnabled>
                        </ReportControl>
                        <ReportControl name="rp2">
                            <RptEnabled>
                                <ClientLN iedName="t2"/>
                            </RptEnabled>
                        </ReportControl>
                        <ReportControl name="rp3">
                            <RptEnabled>
                                <ClientLN iedName="t2"/>
                            </RptEnabled>
                        </ReportControl>
                    </LN0>
                </LDevice>
            </Server>
        </AccessPoint>
    </IED>
    <IED name="t3" esld:x="21" esld:y="5" esld:lx="21.5" esld:ly="7">
        <AccessPoint name="AP1">
            <LN lnClass="IHMI" inst="1"/>
        </AccessPoint>
    </IED>
	<IED name="s31" esld:x="24" esld:y="4" esld:lx="24" esld:ly="4.5">
        <AccessPoint name="AP1">
            <Server>
                <LDevice inst="lDevice">
                    <LN0 lnClass="LLN0" inst="">
                        <ReportControl name="rp1">
                            <RptEnabled>
                                <ClientLN iedName="t3"/>
                            </RptEnabled>
                        </ReportControl>
                        <ReportControl name="rp2">
                            <RptEnabled>
                                <ClientLN iedName="t3"/>
                            </RptEnabled>
                        </ReportControl>
                        <ReportControl name="rp3">
                            <RptEnabled>
                                <ClientLN iedName="t3"/>
                            </RptEnabled>
                        </ReportControl>
                    </LN0>
                </LDevice>
            </Server>
        </AccessPoint>
    </IED>
    <IED name="s32" esld:x="19" esld:y="6" esld:lx="19" esld:ly="8">
        <AccessPoint name="AP1">
            <Server>
                <LDevice inst="lDevice">
                    <LN0 lnClass="LLN0" inst="">
                        <ReportControl name="rp1">
                            <RptEnabled>
                                <ClientLN iedName="t3"/>
                            </RptEnabled>
                        </ReportControl>
                        <ReportControl name="rp2">
                            <RptEnabled>
                                <ClientLN iedName="t3"/>
                            </RptEnabled>
                        </ReportControl>
                        <ReportControl name="rp3">
                            <RptEnabled>
                                <ClientLN iedName="t3"/>
                            </RptEnabled>
                        </ReportControl>
                    </LN0>
                </LDevice>
            </Server>
        </AccessPoint>
    </IED>
    <IED name="s33" esld:x="23" esld:y="6" esld:lx="23" esld:ly="8">
        <AccessPoint name="AP1">
            <Server>
                <LDevice inst="lDevice">
                    <LN0 lnClass="LLN0" inst="">
                        <ReportControl name="rp1">
                            <RptEnabled>
                                <ClientLN iedName="t3"/>
                            </RptEnabled>
                        </ReportControl>
                        <ReportControl name="rp2">
                            <RptEnabled>
                                <ClientLN iedName="t3"/>
                            </RptEnabled>
                        </ReportControl>
                        <ReportControl name="rp3">
                            <RptEnabled>
                                <ClientLN iedName="t3"/>
                            </RptEnabled>
                        </ReportControl>
                    </LN0>
                </LDevice>
            </Server>
        </AccessPoint>
    </IED>
    <IED name="s34" esld:x="20" esld:y="4" esld:lx="20" esld:ly="4.5">
        <AccessPoint name="AP1">
            <Server>
                <LDevice inst="lDevice">
                    <LN0 lnClass="LLN0" inst="">
                        <ReportControl name="rp1">
                            <RptEnabled>
                                <ClientLN iedName="t3"/>
                            </RptEnabled>
                        </ReportControl>
                        <ReportControl name="rp2">
                            <RptEnabled>
                                <ClientLN iedName="t3"/>
                            </RptEnabled>
                        </ReportControl>
                        <ReportControl name="rp3">
                            <RptEnabled>
                                <ClientLN iedName="t3"/>
                            </RptEnabled>
                        </ReportControl>
                    </LN0>
                </LDevice>
            </Server>
        </AccessPoint>
    </IED>
    <IED name="t4" esld:x="5" esld:y="13" esld:lx="6" esld:ly="14">
        <AccessPoint name="AP1">
            <LN lnClass="IHMI" inst="1"/>
        </AccessPoint>
    </IED>
	<IED name="s41" esld:x="5" esld:y="12" esld:lx="5" esld:ly="12.5">
        <AccessPoint name="AP1">
            <Server>
                <LDevice inst="lDevice">
                    <LN0 lnClass="LLN0" inst="">
                        <ReportControl name="rp1">
                            <RptEnabled>
                                <ClientLN iedName="t4"/>
                            </RptEnabled>
                        </ReportControl>
                        <ReportControl name="rp2">
                            <RptEnabled>
                                <ClientLN iedName="t4"/>
                            </RptEnabled>
                        </ReportControl>
                        <ReportControl name="rp3">
                            <RptEnabled>
                                <ClientLN iedName="t4"/>
                            </RptEnabled>
                        </ReportControl>
                    </LN0>
                </LDevice>
            </Server>
        </AccessPoint>
    </IED>
    <IED name="s42" esld:x="5" esld:y="14" esld:lx="5" esld:ly="16">
        <AccessPoint name="AP1">
            <Server>
                <LDevice inst="lDevice">
                    <LN0 lnClass="LLN0" inst="">
                        <ReportControl name="rp1">
                            <RptEnabled>
                                <ClientLN iedName="t4"/>
                            </RptEnabled>
                        </ReportControl>
                        <ReportControl name="rp2">
                            <RptEnabled>
                                <ClientLN iedName="t4"/>
                            </RptEnabled>
                        </ReportControl>
                        <ReportControl name="rp3">
                            <RptEnabled>
                                <ClientLN iedName="t4"/>
                            </RptEnabled>
                        </ReportControl>
                    </LN0>
                </LDevice>
            </Server>
        </AccessPoint>
    </IED>
    <IED name="t5" esld:x="13" esld:y="13" esld:lx="14" esld:ly="14">
        <AccessPoint name="AP1">
            <LN lnClass="IHMI" inst="1"/>
        </AccessPoint>
    </IED>
	<IED name="s51" esld:x="16" esld:y="10" esld:lx="16" esld:ly="10.5">
        <AccessPoint name="AP1">
            <Server>
                <LDevice inst="lDevice">
                    <LN0 lnClass="LLN0" inst="">
                        <ReportControl name="rp1">
                            <RptEnabled>
                                <ClientLN iedName="t5"/>
                            </RptEnabled>
                        </ReportControl>
                        <ReportControl name="rp2">
                            <RptEnabled>
                                <ClientLN iedName="t5"/>
                            </RptEnabled>
                        </ReportControl>
                        <ReportControl name="rp3">
                            <RptEnabled>
                                <ClientLN iedName="t5"/>
                            </RptEnabled>
                        </ReportControl>
                    </LN0>
                </LDevice>
            </Server>
        </AccessPoint>
    </IED>
    <IED name="s52" esld:x="13" esld:y="16" esld:lx="12" esld:ly="17">
        <AccessPoint name="AP1">
            <Server>
                <LDevice inst="lDevice">
                    <LN0 lnClass="LLN0" inst="">
                        <ReportControl name="rp1">
                            <RptEnabled>
                                <ClientLN iedName="t5"/>
                            </RptEnabled>
                        </ReportControl>
                        <ReportControl name="rp2">
                            <RptEnabled>
                                <ClientLN iedName="t5"/>
                            </RptEnabled>
                        </ReportControl>
                        <ReportControl name="rp3">
                            <RptEnabled>
                                <ClientLN iedName="t5"/>
                            </RptEnabled>
                        </ReportControl>
                    </LN0>
                </LDevice>
            </Server>
        </AccessPoint>
    </IED>
    <IED name="s53" esld:x="15" esld:y="15" esld:lx="15" esld:ly="17">
        <AccessPoint name="AP1">
            <Server>
                <LDevice inst="lDevice">
                    <LN0 lnClass="LLN0" inst="">
                        <ReportControl name="rp1">
                            <RptEnabled>
                                <ClientLN iedName="t5"/>
                            </RptEnabled>
                        </ReportControl>
                        <ReportControl name="rp2">
                            <RptEnabled>
                                <ClientLN iedName="t5"/>
                            </RptEnabled>
                        </ReportControl>
                        <ReportControl name="rp3">
                            <RptEnabled>
                                <ClientLN iedName="t5"/>
                            </RptEnabled>
                        </ReportControl>
                    </LN0>
                </LDevice>
            </Server>
        </AccessPoint>
    </IED>
    <IED name="s54" esld:x="14" esld:y="11" esld:lx="14" esld:ly="11.5">
        <AccessPoint name="AP1">
            <Server>
                <LDevice inst="lDevice">
                    <LN0 lnClass="LLN0" inst="">
                        <ReportControl name="rp1">
                            <RptEnabled>
                                <ClientLN iedName="t5"/>
                            </RptEnabled>
                        </ReportControl>
                        <ReportControl name="rp2">
                            <RptEnabled>
                                <ClientLN iedName="t5"/>
                            </RptEnabled>
                        </ReportControl>
                        <ReportControl name="rp3">
                            <RptEnabled>
                                <ClientLN iedName="t5"/>
                            </RptEnabled>
                        </ReportControl>
                    </LN0>
                </LDevice>
            </Server>
        </AccessPoint>
    </IED>
    <IED name="t6" esld:x="21" esld:y="13" esld:lx="22" esld:ly="14">
        <AccessPoint name="AP1">
            <LN lnClass="IHMI" inst="1"/>
        </AccessPoint>
    </IED>
	<IED name="s61" esld:x="20" esld:y="10" esld:lx="19" esld:ly="11">
        <AccessPoint name="AP1">
            <Server>
                <LDevice inst="lDevice">
                    <LN0 lnClass="LLN0" inst="">
                        <ReportControl name="rp1">
                            <RptEnabled>
                                <ClientLN iedName="t6"/>
                            </RptEnabled>
                        </ReportControl>
                        <ReportControl name="rp2">
                            <RptEnabled>
                                <ClientLN iedName="t6"/>
                            </RptEnabled>
                        </ReportControl>
                        <ReportControl name="rp3">
                            <RptEnabled>
                                <ClientLN iedName="t6"/>
                            </RptEnabled>
                        </ReportControl>
                    </LN0>
                </LDevice>
            </Server>
        </AccessPoint>
    </IED>
    <IED name="s62" esld:x="21" esld:y="10" esld:lx="22" esld:ly="11">
        <AccessPoint name="AP1">
            <Server>
                <LDevice inst="lDevice">
                    <LN0 lnClass="LLN0" inst="">
                        <ReportControl name="rp1">
                            <RptEnabled>
                                <ClientLN iedName="t6"/>
                            </RptEnabled>
                        </ReportControl>
                        <ReportControl name="rp2">
                            <RptEnabled>
                                <ClientLN iedName="t6"/>
                            </RptEnabled>
                        </ReportControl>
                        <ReportControl name="rp3">
                            <RptEnabled>
                                <ClientLN iedName="t6"/>
                            </RptEnabled>
                        </ReportControl>
                    </LN0>
                </LDevice>
            </Server>
        </AccessPoint>
    </IED>
    <IED name="s63" esld:x="20" esld:y="15" esld:lx="20" esld:ly="17">
        <AccessPoint name="AP1">
            <Server>
                <LDevice inst="lDevice">
                    <LN0 lnClass="LLN0" inst="">
                        <ReportControl name="rp1">
                            <RptEnabled>
                                <ClientLN iedName="t6"/>
                            </RptEnabled>
                        </ReportControl>
                        <ReportControl name="rp2">
                            <RptEnabled>
                                <ClientLN iedName="t6"/>
                            </RptEnabled>
                        </ReportControl>
                        <ReportControl name="rp3">
                            <RptEnabled>
                                <ClientLN iedName="t6"/>
                            </RptEnabled>
                        </ReportControl>
                    </LN0>
                </LDevice>
            </Server>
        </AccessPoint>
    </IED>
    <IED name="s64" esld:x="18" esld:y="11" esld:lx="18" esld:ly="11.5">
        <AccessPoint name="AP1">
            <Server>
                <LDevice inst="lDevice">
                    <LN0 lnClass="LLN0" inst="">
                        <ReportControl name="rp1">
                            <RptEnabled>
                                <ClientLN iedName="t6"/>
                            </RptEnabled>
                        </ReportControl>
                        <ReportControl name="rp2">
                            <RptEnabled>
                                <ClientLN iedName="t6"/>
                            </RptEnabled>
                        </ReportControl>
                        <ReportControl name="rp3">
                            <RptEnabled>
                                <ClientLN iedName="t6"/>
                                <ClientLN iedName="t6"/>
                                <ClientLN iedName="invalidIed"/>
                            </RptEnabled>
                        </ReportControl>
                    </LN0>
                </LDevice>
            </Server>
        </AccessPoint>
    </IED>
</SCL>`;
