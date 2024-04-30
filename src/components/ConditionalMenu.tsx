import { Button, Modal } from "@mantine/core";
import { FiTrash } from "react-icons/fi";
import { PiPaintBrushBroad } from "react-icons/pi";
import { ChangeStatesType } from "../constants/types";
import { useState } from "react";

interface IConditionalMenu {
  changeStates: ChangeStatesType;
  setChangeStates: React.Dispatch<React.SetStateAction<ChangeStatesType>>;
  sourceInstance: any;
}

const ConditionalMenu = (props: IConditionalMenu) => {
  const { changeStates, setChangeStates, sourceInstance } = props;
  const [deleteModal, setDeleteModal] = useState(false);
  const [clearModal, setClearModal] = useState(false);
  return (
    <>
      <div
        className={`absolute z-30 w-fit h-fit  right-4 bottom-24 p-4 flex flex-col gap-4`}
      >
        <Modal
          opened={deleteModal}
          onClose={() => setDeleteModal(false)}
          title={"Are you sure?"}
          centered
        >
          <Button
            color="red"
            onClick={() => {
              changeStates.selectedFeatures.forEach((feature: any) => {
                sourceInstance.removeFeature(feature);
              });
              setChangeStates((prev) => ({
                ...prev,
                features: prev.features.filter(
                  (feature) => !prev.selectedFeatures.includes(feature)
                ),
                selectedFeatures: [],
              }));
              setDeleteModal(false);
            }}
            className="mr-4"
          >
            Delete
          </Button>
          <Button
            color={import.meta.env.VITE_PRIMARY_COLOR}
            variant="light"
            onClick={() => setDeleteModal(false)}
          >
            Cancel
          </Button>
        </Modal>
        <Modal
          opened={clearModal}
          onClose={() => setClearModal(false)}
          title={"Are you sure?"}
          centered
        >
          <Button
            color="red"
            onClick={() => {
              setChangeStates((prev) => ({
                ...prev,
                features: [],
              }));
              sourceInstance.clear();
              setClearModal(false);
            }}
            className="mr-4"
          >
            Clear
          </Button>
          <Button
            color={import.meta.env.VITE_PRIMARY_COLOR}
            variant="light"
            onClick={() => setClearModal(false)}
          >
            Cancel
          </Button>
        </Modal>
        {changeStates.selectedFeatures.length > 0 && (
          <Button
            color={import.meta.env.VITE_PRIMARY_COLOR}
            variant={"white"}
            onClick={() => {
              //   changeStates.selectedFeatures.forEach((feature: any) => {
              //     sourceInstance.removeFeature(feature);
              //   });
              //   setChangeStates((prev) => ({
              //     ...prev,
              //     features: prev.features.filter(
              //       (feature) => !prev.selectedFeatures.includes(feature)
              //     ),
              //     selectedFeatures: [],
              //   }));
              setDeleteModal(true);
            }}
            radius={"xl"}
            style={{ width: 40, height: 40, padding: 1 }}
          >
            <FiTrash size={20} />
          </Button>
        )}
        {changeStates.features.length > 0 && (
          <Button
            color={import.meta.env.VITE_PRIMARY_COLOR}
            variant={"white"}
            onClick={() => {
              //   setChangeStates((prev) => ({
              //     ...prev,
              //     features: [],
              //   }));
              //   sourceInstance.clear();
              setClearModal(true);
            }}
            radius={"xl"}
            style={{ width: 40, height: 40, padding: 1 }}
          >
            <PiPaintBrushBroad size={20} />
          </Button>
        )}
      </div>
    </>
  );
};
export default ConditionalMenu;
