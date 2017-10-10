/*
 * JBoss, Home of Professional Open Source
 * Copyright 2014, Red Hat, Inc. and/or its affiliates, and individual
 * contributors by the @authors tag. See the copyright.txt in the
 * distribution for a full listing of individual contributors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Define the REST resource service, allowing us to interact with it as a high level service
angular.module('usersService', ['ngResource']).
    factory('Users', function($resource){
  return $resource('http://localhost:8080/api/users/:memberId', {});
});

angular.module('productService', ['ngResource']).
    factory('Products', function($resource){
  return $resource('http://localhost:8080/api/products/:Id', {});
});

angular.module('offerService', ['ngResource']).
    factory('Offers', function($resource){
  return $resource('http://localhost:8080/api/offers/:Id', {});
});

angular.module('quoteService', ['ngResource']).
    factory('Quote', function($resource){
  return $resource('http://localhost:8080/api/brms/ds/order', {});
});

angular.module('shippingService', ['ngResource']).
    factory('Shipping', function($resource){
  return $resource('http://localhost:8080/api/shipping/:Country', {});
});

angular.module('countriesService', ['ngResource']).
    factory('Countries', function($resource){
  return $resource('http://localhost:8080/api/shipping/countries', {});
});

