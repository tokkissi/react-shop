import React from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { plusAge } from "../store/userSlice";
import { plusCount, deleteOrder } from "../store/cartDataSlice";

const CartPage = () => {
  const state = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();
  console.log(state);

  return (
    <div>
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
                      console.log("data.id = ", typeof data.id);
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
