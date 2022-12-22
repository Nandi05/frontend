<BrowserRouter>
    <Navigation/>
    <Switch>
      <Route exact path='/' element={<Home/>}/>
      {/* <Route exact path='/authenticate' element={<Authenticate/>}/> */}
      <GuestRoute path='/authenticate' >
        <Authenticate/>
      </GuestRoute>
      {/* <Route exact path='/register' element={<Register/>}/>
      <Route exact path='/login' element={<Login/>}/> */}
      
    </Switch>
    </BrowserRouter>