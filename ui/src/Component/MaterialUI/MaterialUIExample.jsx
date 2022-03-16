import React from 'react';
import MaterialUIButtonExample from "./MaterialUIButtonExample";
import CenteredGrid from "./CenteredGrid";
import IconLabelButtons from "./IconLabelButtons";
import CheckboxLabels from "./CheckboxLabels";
import TemporaryDrawer from "./TemporaryDrawer";

function MaterialUIExample() {
  return (
      <div>
        <TemporaryDrawer />
        <CheckboxLabels />
        <IconLabelButtons/>
        <CenteredGrid/>
        <MaterialUIButtonExample/>
      </div>
  );
}

export default MaterialUIExample;