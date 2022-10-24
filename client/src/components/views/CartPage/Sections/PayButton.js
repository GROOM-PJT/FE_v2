import React from "react";
import { Button } from "antd";

function PayButton() {
  const payButtonClick = (event) => {
    alert("결제창으로 이동합니다.");
  };
  return (
    <div>
      <Button type="primary" block onClick={payButtonClick}>
        결제하기
      </Button>
    </div>
  );
}

export default PayButton;
