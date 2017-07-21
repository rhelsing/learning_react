class PagesController < ApplicationController
  def index
    render react_component: 'Hello', props: { name: 'Ryan' }
  end

  def another_page
    render react_component: 'CardExampleCard', props: { year: '2019' }
  end
end
