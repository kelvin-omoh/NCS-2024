"use client"

import { useDialogStore } from "@/stores/dialog";
import { Modal } from "@nextui-org/react";

const DialogViewer = () => {
    const { component, hide, size } = useDialogStore()

    return <Modal
        // hideCloseButton
        className="rounded-3xl"
        backdrop={"opaque"}
        isOpen={component != undefined}
        onClose={hide}
        size={size}
        // radius="lg"
        scrollBehavior={"inside"}>
        {component}
    </Modal>
}

export default DialogViewer;