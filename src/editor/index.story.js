import React from 'react';
import { storiesOf } from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.css';
import Editor from './index';

storiesOf('Editor', module).add('default', () => <Editor />);
