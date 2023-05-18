import Card, { CardItem } from "@/components/molecules/Card/Card"
import ManufacturerState from "@/interfaces/ManufacturerState"
import React from "react"

export default ({
  selectedManufacturer,
  modelsBySelectedManufacturer,
}: {
  selectedManufacturer: ManufacturerState["selectedManufacturer"]
  modelsBySelectedManufacturer: ManufacturerState["modelsBySelectedManufacturer"]
}) => (
  <Card title={selectedManufacturer!.name} className="max-w-7xl m-auto">
    <div className="flex flex-col">
      <br />
      {selectedManufacturer &&
        Object.keys(selectedManufacturer).map((key: string) => {
          return (
            <CardItem title={key} key={key}>
              {
                (
                  selectedManufacturer as {
                    [key: string]: any
                  }
                )[key]
              }
            </CardItem>
          )
        })}
      <CardItem title="models">
        {modelsBySelectedManufacturer &&
          modelsBySelectedManufacturer.map(model => {
            return <div key={model.id}>{model.name}</div>
          })}
      </CardItem>
    </div>
  </Card>
)
