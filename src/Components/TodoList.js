import { proposalSyntaxPlugins } from '@babel/preset-env/lib/shipped-proposals';
import React from 'react';
import '../styles/TodoList.css'

function TodoList(props) {
  const renderFunc = props.children || props.render
  return (
    <section className="TodoList-container">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {(!props.loading && props.totalTodos.length) && props.onEmptyTodos()}
      {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}

      {props.searchedTodos.map(renderFunc)}

    </section>
  );
}

export { TodoList };
