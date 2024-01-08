import "./Color.css";
import React from "react";
import { Heading, Popover, Table, Text } from "@radix-ui/themes";

export interface ColorRowProps {
  name: string;
  value: string;
}

const names = {
  "--bg-robin-100": "#CAD5FD",
  "--bg-robin-200": " #B8C7FC",
  "--bg-robin-300": " #95ACFB",
  "--bg-robin-400": " #7190F9",
  "--bg-robin-500": " #4E74F8",
  "--bg-robin-600": " #3F5ECC",
  "--bg-sienna-100": " #E6D9CD",
  "--bg-sienna-200": " #DECCBC",
  "--bg-sienna-300": " #CEB29B",
  "--bg-sienna-400": " #BD9979",
  "--bg-sienna-500": " #AD7F58",
  "--bg-sienna-600": " #8A6646",
  "--bg-cherry-100": " #FADADB",
  "--bg-cherry-200": " #F7C8CA",
  "--bg-cherry-300": " #F5B6B8",
  "--bg-cherry-400": " #EA6D71",
  "--bg-cherry-500": " #E5484D",
  "--bg-cherry-600": " #B83A3E",
  "--bg-aqua-100": " #C1EEFD",
  "--bg-aqua-200": " #9AE4FC",
  "--bg-aqua-300": " #72D9FB",
  "--bg-aqua-400": " #4BCFF9",
  "--bg-aqua-500": " #23C4F8",
  "--bg-aqua-600": " #07AFE6",
  "--bg-sakura-100": " #FBC8D2",
  "--bg-sakura-200": " #FAB5C3",
  "--bg-sakura-300": " #F791A5",
  "--bg-sakura-400": " #F56C87",
  "--bg-sakura-500": " #F24769",
  "--bg-sakura-600": " #C53955",
  "--bg-amber-100": " #FFF0CC",
  "--bg-amber-200": " #FFEBBB",
  "--bg-amber-300": " #FFE19A",
  "--bg-amber-400": " #FFD778",
  "--bg-amber-500": " #FFCD56",
  "--bg-amber-600": " #D5AA45",
  "--bg-ink-100": " #2A2E37",
  "--bg-ink-200": " #23262E",
  "--bg-ink-300": " #16181D",
  "--bg-ink-400": " #121317",
  "--bg-ink-500": " #0B0C0E",
  "--bg-vanilla-100": " #FFFFFF",
  "--bg-vanilla-200": " #F5F5F5",
  "--bg-vanilla-300": " #E9E9E9",
  "--bg-vanilla-400": " #C0C1C3",
  "--bg-slate-200": " #2C3140",
  "--bg-slate-300": " #242834",
  "--bg-slate-400": " #1D212D",
  "--bg-slate-500": " #161922",
  "--bg-gradient-coral":
    " linear-gradient(114deg, #ED6D68 14.99%, #FCA083 77.27%)",
  "--bg-gradient-dark-shadow":
    " linear-gradient(139deg, rgba(18, 19, 23, 0.80) 0%, rgba(18, 19, 23, 0.90) 98.68%)",
  "--bg-gradient-dawn": " linear-gradient(99deg, #7A97FA 4.42%, #F977FF 96.6%)",
  "--bg-gradient-ocean":
    " linear-gradient(99deg, #48F8CF 4.42%, #28CBF3 96.6%)",
  "--bg-gradient-splash":
    " linear-gradient(99deg, #4568DC 4.42%, #324DAA 96.6%)",
  "--bg-gradient-flamingo":
    " linear-gradient(92deg, #CA9CD0 1.36%, #D38972 68.48%, #A1B1E7 98.99%)",
  "--bg-forest-200": " #A8F3D3",
  "--bg-forest-300": " #7CEDBE",
  "--bg-forest-400": " #51E7A8",
  "--bg-forest-500": " #25E192",
  "--bg-forest-600": " #1EB475",
  "--text-robin-100": " #CAD5FD",
  "--text-robin-200": " #B8C7FC",
  "--text-robin-300": " #95ACFB",
  "--text-robin-400": " #7190F9",
  "--text-robin-500": " #4E74F8",
  "--text-robin-600": " #3F5ECC",
  "--text-sienna-100": " #E6D9CD",
  "--text-sienna-200": " #DECCBC",
  "--text-sienna-300": " #CEB29B",
  "--text-sienna-400": " #BD9979",
  "--text-sienna-500": " #AD7F58",
  "--text-sienna-600": " #8A6646",
  "--text-cherry-100": " #FADADB",
  "--text-cherry-200": " #F7C8CA",
  "--text-cherry-300": " #F5B6B8",
  "--text-cherry-400": " #EA6D71",
  "--text-cherry-500": " #E5484D",
  "--text-cherry-600": " #B83A3E",
  "--text-aqua-100": " #C1EEFD",
  "--text-aqua-200": " #9AE4FC",
  "--text-aqua-300": " #72D9FB",
  "--text-aqua-400": " #4BCFF9",
  "--text-aqua-500": " #23C4F8",
  "--text-aqua-600": " #07AFE6",
  "--text-sakura-100": " #FBC8D2",
  "--text-sakura-200": " #FAB5C3",
  "--text-sakura-300": " #F791A5",
  "--text-sakura-400": " #F56C87",
  "--text-sakura-500": " #F24769",
  "--text-sakura-600": " #C53955",
  "--text-amber-100": " #FFF0CC",
  "--text-amber-200": " #FFEBBB",
  "--text-amber-300": " #FFE19A",
  "--text-amber-400": " #FFD778",
  "--text-amber-500": " #FFCD56",
  "--text-amber-600": " #D5AA45",
  "--text-ink-100": " #2A2E37",
  "--text-ink-200": " #23262E",
  "--text-ink-300": " #16181D",
  "--text-ink-400": " #121317",
  "--text-ink-500": " #0B0C0E",
  "--text-vanilla-100": " #FFFFFF",
  "--text-vanilla-200": " #F5F5F5",
  "--text-vanilla-300": " #E9E9E9",
  "--text-vanilla-400": " #C0C1C3",
  "--text-slate-200": " #2C3140",
  "--text-slate-300": " #242834",
  "--text-slate-400": " #1D212D",
  "--text-slate-500": " #161922",
  "--text-gradient-coral":
    " linear-gradient(114deg, #ED6D68 14.99%, #FCA083 77.27%)",
  "--text-gradient-dark-shadow":
    " linear-gradient(139deg, rgba(18, 19, 23, 0.80) 0%, rgba(18, 19, 23, 0.90) 98.68%)",
  "--text-gradient-dawn":
    " linear-gradient(99deg, #7A97FA 4.42%, #F977FF 96.6%)",
  "--text-gradient-ocean":
    " linear-gradient(99deg, #48F8CF 4.42%, #28CBF3 96.6%)",
  "--text-gradient-splash":
    " linear-gradient(99deg, #4568DC 4.42%, #324DAA 96.6%)",
  "--text-gradient-flamingo":
    " linear-gradient(92deg, #CA9CD0 1.36%, #D38972 68.48%, #A1B1E7 98.99%)",
  "--text-forest-200": " #A8F3D3",
  "--text-forest-300": " #7CEDBE",
  "--text-forest-400": " #51E7A8",
  "--text-forest-500": " #25E192",
  "--text-forest-600": " #1EB475",
};

const ColorRow = ({ name, value }: ColorRowProps) => {
  return (
    <Table.Row className="striped-row">
      <Table.RowHeaderCell align="center" className="bordered-cell">
        {name}
      </Table.RowHeaderCell>
      <Table.Cell align="center" className="bordered-cell">
        <Popover.Root>
          <Popover.Trigger>
            <button
              style={{
                all: "unset",
                background: value,
                width: "30px",
                height: "30px",
                display: "inline-block",
                border: `1px solid ${name.includes("white") ? "#000" : "#fff"}`,
                cursor: "pointer",
              }}
            />
          </Popover.Trigger>
          <Popover.Content>
            <Text>var({name}) (click to copy)</Text>
          </Popover.Content>
        </Popover.Root>
      </Table.Cell>
      <Table.Cell className="bordered-cell" align="center">
        {value}
      </Table.Cell>
      <Table.Cell className="bordered-cell" align="center">
        Color.
        {name.replace(/--/g, "").replace(/-/g, "_").toUpperCase()}
      </Table.Cell>
    </Table.Row>
  );
};

export default function Colors(): React.ReactElement {
  return (
    <div style={{ width: "60%", margin: "0 auto" }}>
      <Heading as="h1" style={{ paddingBottom: "25px" }}>
        Colors
      </Heading>
      <Table.Root className="bordered-table">
        <Table.Header>
          <Table.Row className="header-row">
            <Table.ColumnHeaderCell className="bordered-cell">
              CSS Variable Name
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="bordered-cell">
              Color
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="bordered-cell">
              Hex Value
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="bordered-cell">
              Color Reference
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {Object.entries(names).map(([name, value]) => (
            <ColorRow name={name} value={value} key={name + value} />
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
}
