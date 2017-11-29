import React, { Component } from 'react';
import Highlight from 'react-highlight.js';

import './styles.css';

class Home extends Component {
  render() {
    return (
      <section id="home">
        <p>The web application landscape has changed drastically in the past few years. Most users login in to dozens, sometimes hundreds of services each day; sites are no longer silos unto themselves and cannot reasonably expect users to create a unique login and password for each service. This is where OmniAuth comes in.</p>
        <p>OmniAuth is a library that standardizes multi-provider authentication for web applications. It was created to be powerful, flexible, and do as little as possible. Any developer can create strategies for OmniAuth that can authenticate users via disparate systems. OmniAuth strategies have been created for everything from Facebook to LDAP.</p>

        <div className="examples">
          <Highlight language="ruby">{`
require 'sinatra'
require 'omniauth'

class MyApplication < Sinatra::Base
  use Rack::Session::Cookie
  use OmniAuth::Strategies::Developer
end
          `}
          </Highlight>

          <Highlight language="ruby">{`
Rails.application.config.middleware.use OmniAuth::Builder do
  provider :developer unless Rails.env.production?
  provider :twitter, ENV['TWITTER_KEY'], ENV['TWITTER_SECRET']
end
          `}
          </Highlight>
        </div>
      </section>
    );
  }
}

export default Home;
