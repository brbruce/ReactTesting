    // src/js/components/List.jsx
    import React from "react";
    import { connect } from "react-redux";

    // mapStateToProps is a function that takes a state and returns an object
    // with property 'articles' and value of an array.
    const mapStateToProps = state => {
      return { articles: state.articles };
    };

    // ConnectedList is a function which takes an object which has an 'articles'
    // property, and uses the value of articles, which is an array as the parameter
    // to the function.
    const ConnectedList = ({ articles }) => (
      <ul className="list-group list-group-flush">
        {articles.map(el => (
          <li className="list-group-item" key={el.id}>
            {el.title}
          </li>
        ))}
      </ul>
    );

    const List = connect(mapStateToProps)(ConnectedList);

    export default List;