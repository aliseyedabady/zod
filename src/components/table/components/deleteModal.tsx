import React, { FC } from "react";
// import Modal from "../../modal";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { useDispatch } from "react-redux";
// import { close, deleted } from "../../../features/modalDelete";
import Btn from "../../form/button";
import { usePost } from "../../../hooks/usePost";
interface Props {}
const DeleteModal: FC<Props> = () => {
  const { isOpen, id, route } = useSelector((state: RootState) => {
    return state.modalDelete;
  });
  const [, , send, loading] = usePost({
    route,
    redirect: {
      status: true,
      action: (_, body) => {
        console.log("da", body);
        // dispatch(deleted(body.items));
      },
    },
  });
  const dispatch = useDispatch();
  const deleteRow = async () => {
    await send({ items: id }, true);
  };

  return (
    <>
      {/* <Modal
        isOpen={isOpen}
        onClose={() => {
          dispatch(close());
        }}
        title={`حذف اطلاعات #${id}`}
      > */}
      <h2 className="text-right mb-2">آیا برای حذف این ردیف مطمئن هستید؟</h2>
      <p className="text-xs text-right">
        حذف بعضی اطلاعات موجب حذف اطلاعات مرتبط می شود.
      </p>
      <div className="flex items-center gap-2 mt-4">
        <Btn
          loading={loading.send}
          text="حذف"
          className="bg-red py-1 px-6 text-white"
          onClick={deleteRow}
        />
        <Btn
          text="بازگشت"
          className="bg-info py-1 px-6"
          // onClick={() => dispatch(close())}
        />
      </div>
      {/* </Modal> */}
    </>
  );
};

export default DeleteModal;
