import React from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { plusAge } from "../store/userSlice";
import { plusCount } from "../store/cartDataSlice";

const CartPage = () => {
  const state = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();

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
            <th>변경하기</th>
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
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default CartPage;
