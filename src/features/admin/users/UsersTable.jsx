import Empty from "../../../ui/Empty";
import Loading from "../../../ui/Loading";
import Table from "../../../ui/Table";
import useUsers from "../useUsers";
import UserRow from "./UserRow";

const UsersTable = () => {
  const { users, isLoading } = useUsers();
  if (isLoading) return <Loading />;
  if (!users.length) return <Empty message="کاربری وجود ندارد" />;

  return (
    <Table>
      <Table.Head>
        <Table.Row>
          <th>#</th>
          <th>نام کاربر</th>
          <th>ایمیل</th>
          <th>شماره تلفن</th>
          <th>نقش</th>
          <th>وضعیت</th>
          <th>عملیات</th>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {users.map((user, index) => (
          <UserRow user={user} index={index} key={user._id} />
        ))}
      </Table.Body>
    </Table>
  );
};

export default UsersTable;
