# Displaying Content: Tables and Cards

* Add Bootstrap tables as follows:
  * code
  * ```html
    <div class="row row-content">
                <div class="col-12 col-sm-9">
                    <h2>Facts &amp; Figures</h2>
                    <div class="table-responsive">
                        <table class="table table-striped">
                            <thead class="thead-dark">
                                <tr>
                                    <th>&nbsp;</th>
                                    <th>2013</th>
                                    <th>2014</th>
                                    <th>2015</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Employees</th>
                                    <td>15</td>
                                    <td>30</td>
                                    <td>40</td>
                                </tr>
                                <tr>
                                    <th>Guests Served</th>
                                    <td>15000</td>
                                    <td>45000</td>
                                    <td>100,000</td>
                                </tr>
                                <tr>
                                    <th>Special Events</th>
                                    <td>3</td>
                                    <td>20</td>
                                    <td>45</td>
                                </tr>
                                <tr>
                                    <th>Annual Turnover</th>
                                    <td>$251,325</td>
                                    <td>$1,250,375</td>
                                    <td>~$3,000,000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="col-12 col-sm-3">
                </div>
            </div>
    ```
  * Demo

  ![](/front-end-web-ui-frameworks-and-tools-bootstrap-4/assets/W2_3Tables.png)
* Add Boostrap card as follows

  * code
  * ```html
                <div class="col-12 col-sm-6">
                    <div class="card">
                        <h3 class="card-header bg-primary text-white">Facts At a Glance</h3>
                        <div class="card-body">
                            <dl class="row">
                                <dt class="col-6">Started</dt>
                                <dd class="col-6">3 Feb. 2013</dd>
                                <dt class="col-6">Major Stake Holder</dt>
                                <dd class="col-6">HK Fine Foods Inc.</dd>
                                <dt class="col-6">Last Year's Turnover</dt>
                                <dd class="col-6">$1,250,375</dd>
                                <dt class="col-6">Employees</dt>
                                <dd class="col-6">40</dd>
                            </dl>
                        </div>
                    </div>
                </div>
    ```
  * Demo

  ![](/front-end-web-ui-frameworks-and-tools-bootstrap-4/assets/W2_3Card1.png)

* In the card using the blockquote typography

  * code

  * ```html
                <div class="col-12">
                    <div class="card card-body bg-light">
                        <blockquote class="blockquote">
                            <p class="mb-0">You better cut the pizza in four pieces because
                                I'm not hungry enough to eat six.</p>
                            <footer class="blockquote-footer">Yogi Berra,
                                <cite title="Source Title">The Wit and Wisdom of Yogi Berra,
                                P. Pepe, Diversion Books, 2014</cite>
                            </footer>
                        </blockquote>
                    </div>
                </div>
    ```
  * Demo

  ![](/front-end-web-ui-frameworks-and-tools-bootstrap-4/assets/W2_3Card2.png)



