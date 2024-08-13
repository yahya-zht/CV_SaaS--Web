import React from "react";
import { useSelector } from "react-redux";

export default function References(props) {
  const formReferences = useSelector(
    (state) => state.References.formReferences
  );
  const DataListReferences = useSelector(
    (state) => state.References.DataListReferences
  );
  const DataReferences = useSelector(
    (state) => state.References.DataReferences
  );
  return (
    <div>
      {formReferences && (
        <div className={props.styleContainer}>
          <div className={props.styleContainerTitle}>
            <p className={props.styleTitle}>Reference</p>
          </div>
          <div className="mt-1 ms-2">
            {DataListReferences.length > 0 &&
              DataListReferences.map((reference, i) => (
                <div key={i} className={props.styleContainerList}>
                  <p className={props.styleTitleList}>{reference.name}</p>
                  {(reference.organization || reference.cityReferences) && (
                    <p className="text-xs">
                      {reference.organization}, {reference.cityReferences}
                    </p>
                  )}
                  <div className="grid grid-cols-2 gap-2">
                    <p className="text-xs ">
                      <span className="font-semibold">Phone: </span>
                      {reference.phoneNumber}
                    </p>
                    <p className="text-xs">
                      <span className="font-semibold">Email: </span>{" "}
                      {reference.email}
                    </p>
                  </div>
                </div>
              ))}

            {formReferences && (
              <div className={props.styleContainerList}>
                <p className={props.styleTitleList}>{DataReferences.name}</p>
                {(DataReferences.organization ||
                  DataReferences.cityReferences) && (
                  <p className="text-xs">
                    {DataReferences.organization},{" "}
                    {DataReferences.cityReferences}
                  </p>
                )}
                <div className=" grid grid-cols-2 gap-2">
                  {DataReferences.phoneNumber && (
                    <p className="text-xs col-6">
                      <span className="font-semibold">Phone: </span>
                      {DataReferences.phoneNumber}
                    </p>
                  )}
                  {DataReferences.email && (
                    <p className="text-xs me-5 col-6">
                      <span className="font-semibold">Email: </span>
                      {DataReferences.email}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}