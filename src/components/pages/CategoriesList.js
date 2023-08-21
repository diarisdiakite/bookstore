import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAllCategories } from '../../redux/categories/categoriesSlice';
import { selectBooksByCategory } from '../../redux/books/booksSlice';

function CategoriesList() {
  const { categoryId } = useParams();
  const categories = useSelector(selectAllCategories);

  const categoryBooks = useSelector((state) => selectBooksByCategory(state, Number(categoryId)));
  console.log(categoryBooks);

  const content = categories.map((category) => (
    <div key={category.id}>
      <h2 key={category.id}>
        <Link to={`/categories/${category.id}`}>
          {category.name}
          {' '}
          (
          {/* calculate category length */}
          {categoryBooks.length}
          )
        </Link>
      </h2>
      <p key={`description-${category.id}`}>
        {category.description}
        {' '}
      </p>
    </div>
  ));

  return (
    <div className="main-container">
      {content}
    </div>
  );
}

export default CategoriesList;
