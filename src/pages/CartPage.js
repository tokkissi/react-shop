import React, { memo, useState } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { plusAge } from "../store/userSlice";
import { plusCount, deleteOrder } from "../store/cartDataSlice";

const Child = memo(() => {
  console.log("재랜더링");
  return <div>메모 재랜더링 확인용</div>;
});

Child.displayName = "Child";

const CartPage = () => {
  const state = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();
  const [cnt, setCnt] = useState(0);

  return (
    <div>
      <Child></Child>
      <button onClick={() => setCnt(cnt + 1)}>+</button>
      <h4>{`${state.tokki.name} ${state.tokki.age}살 의 장바구니`}</h4>
      <button
        onClick={() => {
          dispatch(plusAge(5));
        }}
      >
        나이 버튼
      </button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>수량 추가</th>
            <th>상품 빼기</th>
          </tr>
        </thead>
        <tbody>
          {state.cartData.map((data, idx) => {
            return (
              <tr key={idx}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.count}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(plusCount(data.id));
                    }}
                  >
                    +
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(deleteOrder(data.id));
                    }}
                  >
                    X
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default CartPage;
