import * as React from 'react';
import AllPeople from './misc/AllPeople';
import Male from './misc/Male';
import Female from './misc/Female';

interface PeopleIconProps {
  readonly value: string;
}

/* tslint:disable:max-line-length */
class PeopleIcon extends React.PureComponent<PeopleIconProps> {
  public render() {
    const value = this.props.value;
    return renderSwitch(value);
  }
}

function renderSwitch(param: string) {
  switch (param) {
    case '0':
      return <AllPeople  />;
    case '1':
      return <Male />;
    case '2':
      return <Female />;
    default:
      return <div />;
  }
}

export default PeopleIcon;
