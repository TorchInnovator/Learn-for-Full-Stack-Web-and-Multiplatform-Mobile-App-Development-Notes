### User Input: Buttons and Forms

### Set up for the Exercise

* first downlaod [_contactus.html.zip_](https://d3c33hcgiwev3.cloudfront.net/NgBx6i0SEeiXuQrbFYW0Wg_36c6ce602d1211e8b30f49c43a1906ac_contactus.html.zip?Expires=1549324800&Signature=GXpRya5HB7dDQ45yv~6Aa6n5mzegKP1HsRg-TVI0RBD02fUuyYiLnRAUBeU4cXTKHFRJpr~jtDvISy2riZhZhezeffUVcaHqlSeAZ5MViYm1Lr37tzHOh4KAO8znHwoLgqTRqCcG6j1vBIE9MrzAE0mdpmZ7KZMyRhr1D21dkIc_&Key-Pair-Id=APKAJLTNE6QMUY6HBC5A)  

### Adding a Button Bar

* add button to \_contactus.html \_file :

  * ```html
    <div class="btn-group" role="group">
        <a role="button" class="btn btn-primary" href="tel:+85212345678"><i class="fa fa-phone"></i> Call</a>
        <a role="button" class="btn btn-info"><i class="fa fa-skype"></i> Skype</a>
        <a role="button" class="btn btn-success" href="mailto:confusion@food.net"><i class="fa fa-envelope-o"></i> Email</a>
    </div>
    ```

* Demo

  ![](/front-end-web-ui-frameworks-and-tools-bootstrap-4/assets/W2_2Button.png)

---

### Adding a Basic Form

* Add Name,Contact Tel., Email, Feedback and send button
* ```html
                  <form>
                      <div class="form-group row">
                          <label for="firstname" class="col-md-2 col-form-label">First Name</label>
                          <div class="col-md-10">
                              <input type="text" class="form-control" id="firstname" name="firstname" placeholder="First Name">
                          </div>
                      </div>
                      <div class="form-group row">
                          <label for="lastname" class="col-md-2 col-form-label">Last Name</label>
                          <div class="col-md-10">
                              <input type="text" class="form-control" id="lastname" name="lastname" placeholder="Last Name">
                          </div>
                      </div>
                      <div class="form-group row">
                          <label for="telnum" class="col-12 col-md-2 col-form-label">Contact Tel.</label>
                          <div class="col-5 col-md-3">
                              <input type="tel" class="form-control" id="areacode" name="areacode" placeholder="Area code">
                          </div>
                          <div class="col-7 col-md-7">
                              <input type="tel" class="form-control" id="telnum" name="telnum" placeholder="Tel. number">
                          </div>
                      </div>
                      <div class="form-group row">
                          <label for="emailid" class="col-md-2 col-form-label">Email</label>
                          <div class="col-md-10">
                              <input type="email" class="form-control" id="emailid" name="emailid" placeholder="Email">
                          </div>
                      </div>
                      <div class="form-group row">
                          <div class="col-md-6 offset-md-2">
                              <div class="form-check">
                                  <input type="checkbox" class="form-check-input" name="approve" id="approve" value="">
                                  <label class="form-check-label" for="approve">
                                      <strong>May we contact you?</strong>
                                  </label>
                              </div>
                          </div>
                          <div class="col-md-3 offset-md-1">
                              <select class="form-control">
                                  <option>Tel.</option>
                                  <option>Email</option>
                              </select>
                          </div>
                      </div>
                      <div class="form-group row">
                              <label for="feedback" class="col-md-2 col-form-label">Your Feedback</label>
                              <div class="col-md-10">
                                  <textarea class="form-control" id="feedback" name="feedback" rows="12"></textarea>
                              </div>
                          </div>
                      <div class="form-group row">
                          <div class="offset-md-2 col-md-10">
                              <button type="submit" class="btn btn-primary">Send Feedback</button>
                          </div>
                      </div>
                  </form>
  ```
* Demo

![](/front-end-web-ui-frameworks-and-tools-bootstrap-4/assets/W2_2Form.png)

