import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import * as Yup from "yup";
import { usePost } from "../../../hooks/usePost";
import { API } from "../../../server";
import { FormElement } from "../../../types/form";

interface Props {
  api: {
    route: string;
    get?: string;
    update?: string;
    onSubmit?: (body: any) => void;
    callBack?: (body: any) => void;
  };
  elements: FormElement[];
  update: boolean;
  sortUpdate: (state: any) => object;
  sortGet: (state: any) => object;
  onEnd?: (data?: any, body?: any) => void;
  initial?: any;
  notSerialize: boolean;
}
export const useCustomForm = ({
  api,
  elements,
  update,
  sortUpdate,
  sortGet,
  onEnd,
  initial = {},
  notSerialize = false,
}: Props) => {
  const [loadingGet, setLoadingGet] = useState(true);
  const { id } = useParams();
  const [, , send, loading] = usePost({
    route: update ? api.update?.replace(":id", id || "") ?? "" : api.route,
    redirect: {
      status: true,
      action: (data, body) => {
        if (onEnd && typeof onEnd === "function") {
          onEnd(data, body);
        }
        if (!update) {
          reset({});
        }
      },
    },
    setError: ob => {
      if (ob) {
        Object.keys(ob).map(key => {
          setError(key, { message: ob[key][0] });
        });
      }
    },
  });
  const getData = async () => {
    if (update) {
      setLoadingGet(true);
      const { data } = await API.get(api.get?.replace(":id", id || "") ?? "");
      reset(sortGet({ ...data.data }));
      setLoadingGet(false);
    }
  };

  const generateSchema = (elements: FormElement[]) => {
    const schemaFields: Record<string, any> = {};

    elements.forEach(element => {
      schemaFields[element.name] = element.validation;
    });

    return Yup.object().shape(schemaFields);
  };
  useEffect(() => {
    if (!update) {
      return;
    }
    getData();
  }, [update]);
  useEffect(() => {
    reset({ ...initial });
  }, []);

  const {
    handleSubmit,
    register,
    formState: { errors },

    watch,
    setValue,
    setError,
    reset,
  } = useForm({
    resolver: yupResolver(generateSchema(elements)),
  });

  const onSubmit = (body: any) => {
    if (api.onSubmit) {
      api.onSubmit(body);
    } else {
      send(
        update
          ? sortUpdate({ ...body, _method: "PUT" })
          : sortUpdate({ ...body }),
        true,
        notSerialize ? true : false
      );
    }
  };
  return {
    generateSchema,
    loading,
    send,
    errors,
    register,
    watch,
    setValue,
    onSubmit,
    handleSubmit,
    id,
    loadingGet,
    setError,
  };
};
