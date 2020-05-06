import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Colors, { MarkColors as markColors } from "../design-system/Colors";
import FontSizes from "../design-system/FontSizes";
import Loading from "../design-system/Loading";
import Modal, { Props as ModalProps } from "../design-system/Modal";
import PopUpMenu from "../design-system/PopUpMenu";
import iconSrcCheck from "../design-system/icons/ic_check.svg";

import { getScenarios } from "../database";
import { Scenario } from "./types";
import CurveChart from "../impact-dashboard/CurveChart";

type Props = Pick<ModalProps, "trigger">;

const ModalContents = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  font-weight: normal;
  justify-content: flex-start;
  margin-top: 30px;
`;

const ScenarioLibrary = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ScenarioCard = styled.div`
  cursor: pointer;
  height: 330px;
  margin-bottom: 25px;
  width: 330px;
`;

const ScenarioHeader = styled.div`
  display: flex;
  padding: 1.5rem 1rem .25rem 1rem;
`;

const ScenarioHeaderText = styled.h1`
  color: ${Colors.forest};
  font-family: "Libre Baskerville", serif;
  font-size: 24px;
  letter-spacing: -0.06em;
  line-height: 24px;
  text-align: left;
  padding-bottom: 0.75rem;
  overflow: hidden;
  text-overflow: ellipsis; 
  white-space: nowrap;
`;

const ScenarioDataViz = styled.div`
  display: flex;
  height: 45%;
  border: 1px dotted red;
`;

const ScenarioDescription = styled.div`
  color: ${Colors.opacityForest};
  font-family: "Poppins";
  font-size: 13px;
  line-height: 20px;
  letter-spacing: -0.03em;
  min-height: 18%;
  padding: 1rem 1rem 0rem 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
`;

const ScenarioFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.75rem 1rem .25rem 1rem;
`;

const LastUpdatedLabel = styled.div`
  color: ${Colors.forest50};
  font-family: "Poppins";
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: -0.03em;
`;

interface IconCheckProps {
  baseline?: boolean;
}

const IconCheck = styled.img<IconCheckProps>`
  display: ${props => props.baseline ? "inline" : "none"};
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;

const ScenarioLibraryModal: React.FC<Props> = ({ trigger }) => {
  function duplicate(this: Scenario) {
    alert("duplicated!" + this.id);
  };

  function openDeleteModal(this: Scenario) {
    alert("deleted!" + this.id);
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [scenarios, setScenarios] = useState({
    data: [] as Scenario[],
    loading: true,
  });

  async function fetchScenarios() {
    const scenariosData = await getScenarios();

    if (scenariosData) {
      setScenarios({
        data: scenariosData,
        loading: false,
      });
    }
  }

  useEffect(() => {
    fetchScenarios();
  }, []);

  return (
    <Modal
      modalTitle="Library"
      open={modalOpen}
      setOpen={setModalOpen}
      trigger={trigger}
      vw="45vw"
    >
      <ModalContents>
        <ScenarioLibrary>
          {scenarios.loading ? (
            <Loading />
          ) : (
            scenarios?.data.map((scenario) => {
              const popupItems = [
                { name: "Duplicate", onClick: duplicate.bind(scenario) },
                { name: "Delete", onClick: openDeleteModal.bind(scenario) }
              ];

              return (
                <ScenarioCard key={scenario.id} className="border border-gray-500 rounded">
                  <ScenarioHeader>
                    <IconCheck alt="check" src={iconSrcCheck} baseline={scenario.baseline} />
                    <ScenarioHeaderText>{scenario.name}</ScenarioHeaderText>
                  </ScenarioHeader>
                  <ScenarioDataViz>
                    <div className="m-auto">DATA VIZ GOES HERE</div>
                  </ScenarioDataViz>
                  <ScenarioDescription>
                    {scenario.description}                  
                  </ScenarioDescription>
                  <ScenarioFooter>
                    <LastUpdatedLabel>Last Updated: December 29, 2020</LastUpdatedLabel>
                    <PopUpMenu items={popupItems} />
                  </ScenarioFooter>
                </ScenarioCard>
              );
            })
          )}
        </ScenarioLibrary>
      </ModalContents>
    </Modal>
  );
};

export default ScenarioLibraryModal;
