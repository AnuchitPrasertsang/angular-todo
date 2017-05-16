import 'angular';
import 'angular-mocks/angular-mocks';
import './src/app/app.module';

let context = require.context('./src', true, /\.spec\.js/);

context.keys().forEach(context);
