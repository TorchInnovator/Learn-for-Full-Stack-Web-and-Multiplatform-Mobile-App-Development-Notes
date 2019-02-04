# Tabs

* Adding Tab Navigation Elements

  * In aboutus.html to set up the tabbed navigation following this code:

  ```html
                  <ul class="nav nav-tabs">
                      <li class="nav-item">
                        <a class="nav-link active" href="#peter"
                          role="tab" data-toggle="tab">Peter Pan, CEO</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#danny" role="tab"
                          data-toggle="tab">Danny Witherspoon, CFO</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#agumbe"role="tab"
                          data-toggle="tab">Agumbe Tang, CTO</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#alberto" role="tab"
                          data-toggle="tab">Alberto Somayya, Exec. Chef</a>
                      </li>
                  </ul>
  ```

* Adding Tab Content

  * first we group all tab panes,so take entire content into a div with the class tab-content , and use tab-pane to control them like this

  ```html
  <div class="tab-content">
                      <div role="tabpanel" class="tab-pane fade show active" id="peter">
                          <h3>Peter Pan <small>Chief Epicurious Officer</small></h3>
                          <p>Our CEO, Peter, credits his hardworking East Asian immigrant parents who undertook the
                              arduous
                              journey to the shores of America with the intention of giving their children the best
                              future.
                              His
                              mother's wizardy in the kitchen whipping up the tastiest dishes with whatever is available
                              inexpensively at the supermarket, was his first inspiration to create the fusion cuisines
                              for
                              which
                              <em>The Frying Pan</em> became well known. He brings his zeal for fusion cuisines to this
                              restaurant, pioneering cross-cultural culinary connections.</p>
                      </div>
                      <div role="tabpanel" class="tab-pane fade" id="danny">
                          <h3>Dhanasekaran Witherspoon <small>Chief Food Officer</small></h3>
                          <p>Our CFO, Danny, as he is affectionately referred to by his colleagues, comes from a long
                              established
                              family tradition in farming and produce. His experiences growing up on a farm in the
                              Australian
                              outback gave him great appreciation for varieties of food sources. As he puts it in his own
                              words,
                              <em>Everything that runs, wins, and everything that stays, pays!</em></p>
                      </div>
                      <div role="tabpanel" class="tab-pane fade" id="agumbe">
                          <h3>Agumbe Tang <small>Chief Taste Officer</small></h3>
                          <p>Blessed with the most discerning gustatory sense, Agumbe, our CFO, personally ensures that
                              every
                              dish that we serve meets his exacting tastes. Our chefs dread the tongue lashing that
                              ensues if
                              their dish does not meet his exacting standards. He lives by his motto, <em>You click only
                                  if
                                  you
                                  survive my lick.</em></p>
                      </div>
                      <div role="tabpanel" class="tab-pane fade" id="alberto">
                          <h3>Alberto Somayya <small>Executive Chef</small></h3>
                          <p>Award winning three-star Michelin chef with wide International experience having worked
                              closely
                              with
                              whos-who in the culinary world, he specializes in creating mouthwatering Indo-Italian
                              fusion
                              experiences. He says, <em>Put together the cuisines from the two craziest cultures, and you
                                  get
                                  a
                                  winning hit! Amma Mia!</em></p>
                      </div>
                  </div>
  ```

* Modifying the tab-content CSS

  * mystyles.css add these code:

  ```css
  .tab-content {
      border-left: 1px solid #ddd;
      border-right: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
      padding: 10px;
  }
  ```



