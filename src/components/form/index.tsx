import React from "react";
import { FormProps, FormElement } from "../../types/form";
// import TopCard from "../card/top";
import Btn from "./button";
import { useCustomForm } from "./hooks";
// import ImageUploader from "./imageUploader";
import Input from "./input";
import FormLayout from "./layout";
import CustomSelect from "./select";
import Wrapper from "./wrapper";
// import CustomDatePicker from "./datePicker";
import Loader from "../loader";
import SelectApi from "./selectApi";
import TextArea from "./textarea";
import MultiSelectApi from "./multiSelectApi";

const CustomForm: React.FC<FormProps> = ({
  title,
  elements,
  btn,
  api,
  update,
  sortUpdate = state => {
    return state;
  },
  sortGet = state => {
    return state;
  },
  cards,
  onEnd,
  accessUpdate,
  initial,
  notSerialize = false,
  subBtn = () => {},
}) => {
  const {
    loading,
    send,
    errors,
    register,
    watch,
    setValue,
    onSubmit,
    handleSubmit,
    loadingGet,
    setError,
  } = useCustomForm({
    api,
    elements,
    sortUpdate,
    sortGet,
    update: update || false,
    onEnd,
    initial,
    notSerialize,
  });

  const render = (element: FormElement, key: number) => {
    switch (element.type) {
      case "input":
        return (
          <Wrapper
            col={element.col}
            classNames={element.wrapperClassName}
            key={key}
          >
            <Input
              {...(element.validation?.required
                ? {
                    optional: false,
                  }
                : {
                    optional: true,
                  })}
              type={element.inputType}
              readonly={element.readonly}
              label={element.label}
              props={{ ...register(element.name) }}
              error={errors[element.name]}
            />
          </Wrapper>
        );

      case "select":
        return (
          <Wrapper
            exists={element.exists}
            existIf={element.existIf}
            watch={watch}
            col={element.col}
            classNames={element.wrapperClassName}
            key={key}
          >
            <CustomSelect
              {...(element.validation?.required
                ? {
                    optional: false,
                  }
                : {
                    optional: true,
                  })}
              label={element.label}
              options={element.options || []}
              error={errors[element.name]}
              onChange={e => {
                setValue(element.name, e);
              }}
              readonly={element.readonly}
              value={watch(element.name)}
            />
          </Wrapper>
        );

      case "textarea":
        return (
          <Wrapper
            col={element.col}
            classNames={element.wrapperClassName}
            key={key}
          >
            <TextArea
              {...(element.validation?.required
                ? {
                    optional: false,
                  }
                : {
                    optional: true,
                  })}
              label={element.label}
              props={{ ...register(element.name) }}
              error={errors[element.name]}
            />
          </Wrapper>
        );
      case "selectApi":
        return (
          <Wrapper
            exists={element.exists}
            watch={watch}
            col={element.col}
            classNames={element.wrapperClassName}
            key={key}
          >
            <SelectApi
              {...(element.validation?.required
                ? {
                    optional: false,
                  }
                : {
                    optional: true,
                  })}
              label={element.label}
              allowClear={element.allowClear}
              depend={element.depend}
              dependValue={() => {
                if (element.depend) {
                  return watch(element.depend.key);
                }
              }}
              error={errors[element.name]}
              onChange={e => {
                if (element.onChange) {
                  element.onChange(e, watch, setValue);
                } else {
                  setValue(element.name, e);
                }
              }}
              readonly={element.readonly}
              value={watch(element.name)}
              api={
                element.api || {
                  route: "",
                  sort: state => {
                    return state.data;
                  },
                }
              }
            />
          </Wrapper>
        );

      case "multiSelectApi":
        return (
          <Wrapper
            col={element.col}
            classNames={element.wrapperClassName}
            key={key}
          >
            <MultiSelectApi
              {...(element.validation?.required
                ? {
                    optional: false,
                  }
                : {
                    optional: true,
                  })}
              label={element.label}
              depend={element.depend}
              dependValue={() => {
                if (element.depend) {
                  return watch(element.depend.key);
                }
              }}
              error={errors[element.name]}
              onChange={(e, allObj) => {
                setValue(element.name, e);
                if (element.onChange) {
                  element.onChange(allObj, watch, setValue);
                }
              }}
              value={watch(element.name)}
              api={
                element.api || {
                  route: "",
                  sort: state => {
                    return state.data;
                  },
                }
              }
            />
          </Wrapper>
        );
      case "component":
        return element.component && element.component(watch);

      default:
        break;
    }
  };
  const btnFormComponent = btn && (
    <Btn
      text={btn.text}
      type="submit"
      loading={loading.send || btn.loading}
      onClick={handleSubmit(onSubmit)}
      className="bg-primary mt-6 hover:bg-subPrimary h-[40px] text-white justify-center  px-6 py-2  min-w-[140px]"
    />
  );
  if (update && loadingGet) {
    return <Loader classNames="mt-10" height={"60vh"} />;
  }
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        onKeyDown={e => {
          if (e.key === "Enter") {
            e.preventDefault();
          }
        }}
      >
        {!cards ? (
          <>
            <div className="grid grid-cols-12 gap-5">
              {elements.map((ele: FormElement, key) => {
                return render(ele, key);
              })}
            </div>
          </>
        ) : (
          cards?.map((card, key) => {
            if (!card.disabled) {
              return (
                <FormLayout key={key} title={card.title}>
                  <div className="grid grid-cols-12 gap-5">
                    {elements.map((ele: FormElement, key) => {
                      if (card.key === ele.cardKey) {
                        return render(ele, key);
                      }
                      return <></>;
                    })}
                    {btn && btn.card ? (
                      +btn.card === +card.key && (
                        <div className={"col-span-12 md:col-span-4"}>
                          {btnFormComponent}
                        </div>
                      )
                    ) : (
                      <></>
                    )}
                  </div>
                </FormLayout>
              );
            }
            return <></>;
          })
        )}

        {btn && (
          <div className="flex gap-2">
            {!btn.card && (
              <>
                {btnFormComponent}
                {subBtn && subBtn()}
              </>
            )}
          </div>
        )}
      </form>
    </>
  );
};

export default CustomForm;
