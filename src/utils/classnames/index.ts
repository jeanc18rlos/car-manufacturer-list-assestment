export default function classnames(...classes: string[]) {
  return classes
    .filter(value => value && typeof value === "string" && value.trim() !== "")
    .join(" ")
}
