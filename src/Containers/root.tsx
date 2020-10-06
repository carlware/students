import { ThemeProvider, CSSReset, theme } from '@chakra-ui/core'
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import ErrorView from './ErrorView'
import CreateView from './StudentCreateView'
import EditView from './StudentEditView'
import ListView from './StudentListView'

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Switch>
      <Route path="/students/new" exact component={CreateView} />
      <Route path="/students/:id" exact component={EditView} />
      <Route path="/error" exact component={ErrorView} />
      <Route path="/" exact component={ListView} />
      <Redirect from="/" to="/error" />
      </Switch>
    </ThemeProvider>
  );
}


export default Root;