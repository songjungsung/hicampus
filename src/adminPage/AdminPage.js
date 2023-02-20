import './AdminPage.css';

const AdminPage = () => {


    return (
        <>
            {/* 사이드바 */}
            <div className="border-end bg-white" id="sidebar-wrapper">
                <div className="sidebar-heading border-bottom bg-light">수강생 관리하기</div>
                <div className="list-group list-group-flush">
                    <button className="list-group-item list-group-item-action list-group-item-light p-3"
                    >강좌1</button>
                    <button className="list-group-item list-group-item-action list-group-item-light p-3"
                    >강좌2</button>
                    <button className="list-group-item list-group-item-action list-group-item-light p-3"
                    >강좌3</button>
                </div>
            {/* 학생 목록 */}
                <div className="container">
                    <h2>학생 목록</h2>
                    <table className="board_list">
                        <colgroup>
                            <col width="20%" />
                            <col width="30%" />
                            <col width="20%" />
                            <col width="30%" />
                        </colgroup>
                        <thead>
                            <tr>
                                <th scope="col">학생이름</th>
                                <th scope="col">전화번호</th>
                                <th scope="col">총출석일수</th>
                                <th scope="col">훈련장려금</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>내용</td>
                                <td>내용</td>
                                <td>내용</td>
                                <td>내용</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default AdminPage;
