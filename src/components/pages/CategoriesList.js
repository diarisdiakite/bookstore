import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAllCategories } from '../../redux/categories/categoriesSlice';

function CategoriesList() {
  // const { categoryId } = useParams();
  const categories = useSelector(selectAllCategories);

  const content = categories.map((category) => (
    <div key={category.id}>
      <h2 key={category.id}>
        <Link to={`/categories/${category.id}`}>
          {category.name}
          {' '}
          (
          {/* calculate category length */}
          {category.totalBooksInCategory || 0}
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
