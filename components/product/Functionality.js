function Functionality() {
  return (
    <div id="functionality">
      <h2>Functionality</h2>
      <h3>Basic Functionality</h3>
      <p>
        A completely new user finds this app. He/she can signup his/her account
        and then has to enter basic details like name, phone, basic health
        problems, address and the most important field is his/her preferred
        hospital which will be nearest to the house.
        <br />
        <br />
        Now, one day an emergency occurs so the family member also present there
        can press the emergency button after which -
        <ul>
          <li>
            An emergency request is sent to multiple hospitals at once (i.e the
            preferred hospitals)
          </li>
          <li>
            The hospital has the ability to accept or reject the request based
            on the availability which they can also view on their dashboard
            which our company is offering.
          </li>
          <li>
            If rejected, there are other hospitals who are there to accept
          </li>
          <li>
            If accepted, the request is assigned to the hospital, after which an
            automatic dispatch request is sent to the ambulance with the user
            coordinates.
          </li>
        </ul>
      </p>
    </div>
  );
}

export default Functionality;
