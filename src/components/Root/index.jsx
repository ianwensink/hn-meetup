import React from 'react';
import { DrupalPage } from 'hn-react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router';
import Base from '../Base';
import ContentTypeMapper from '../mappers/content-types';

function Root({ location }) {
  return (
    <DrupalPage
      asyncMapper
      renderWhileLoadingData
      layout={Base}
      mapper={ContentTypeMapper}
      url={location.pathname + location.search}
    />
  );
}

Root.propTypes = {
  location: ReactRouterPropTypes.location.isRequired,
};

export default withRouter(Root);
