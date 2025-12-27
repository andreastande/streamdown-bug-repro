"use client"

import { useQueryState } from "nuqs"
import { Checkbox } from "./ui/checkbox"
import { Label } from "./ui/label"

export function StreamdownVersion() {
  const [streamdownVersion, setStreamdownVersion] = useQueryState("v", { defaultValue: "1.6.10" })

  return (
    <div className="fixed top-6 right-6 flex items-center space-x-2">
      <Checkbox
        id="version"
        checked={streamdownVersion === "1.5.1"}
        onCheckedChange={(checked) => setStreamdownVersion(checked ? "1.5.1" : null)}
      />
      <Label htmlFor="version">Use v1.5.1</Label>
    </div>
  )
}
