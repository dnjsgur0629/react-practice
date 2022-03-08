import React from "react";
import Dialog from "./Dialog";
import CustomDialog from "./CustomDialog";

function WelcomeDialog() {
  return (
    <div>
      <Dialog>
        <h1>Welcome</h1>
        <h5>Thank you!</h5>
      </Dialog>
      <br />
      <CustomDialog title="Welcome" description="Thank you" />
    </div>
  );
}

export default WelcomeDialog;
