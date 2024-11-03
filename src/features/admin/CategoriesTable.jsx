import useCategories from "../../hooks/useCategories";
import Empty from "../../ui/Empty";
import Loading from "../../ui/Loading";
import Table from "../../ui/Table";
import CategoryRow from "./CategoriesRow";

const CategoriesTable = () => {
  const { isLoading, rawCategories } = useCategories();

  if (isLoading) return <Loading />;
  if (!rawCategories.length)
    return <Empty message="شما هنوز دسته بندی ندارید" />;

  return (
    <Table>
      <Table.Head>
        <Table.Row>
          <th>#</th>
          <th>عنوان دسته بندی</th>
          <th>توضیحات</th>
          <th>عنوان انگلیسی</th>
          <th>عملیات</th>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {rawCategories.map((category, index) => (
          <CategoryRow category={category} index={index} key={category._id} />
        ))}
      </Table.Body>
    </Table>
  );
};

export default CategoriesTable;
