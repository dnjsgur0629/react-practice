import React from 'react';
import MaterialUIButtonExample from "./MaterialUIButtonExample";
import CenteredGrid from "./CenteredGrid";
import IconLabelButtons from "./IconLabelButtons";
import CheckboxLabels from "./CheckboxLabels";
import TemporaryDrawer from "./TemporaryDrawer";
import VirtualizedListExample from "./VirtualizedListExample";

function MaterialUIExample() {
  return (
      <div>
        <VirtualizedListExample />
        <TemporaryDrawer />
        <CheckboxLabels />
        <IconLabelButtons/>
        <CenteredGrid/>
        <MaterialUIButtonExample/>
      </div>
  );
}

export default MaterialUIExample;