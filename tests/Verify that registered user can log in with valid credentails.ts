import { test, expect, APIResponse } from '@playwright/test';


const URL = 'https://onlinelibrary.wiley.com/action/showLogin?';

test.only('Verify that registered user can log in with valid credentails', async ({request}) => {

  let response : APIResponse = await request.post(
    URL,
    {
      data:{
        username : "kevin41055@gmail.com",
        password : "Kevin!1234"
    }
    
  }
  );

  expect(response.status()).toBe(200);
  expect(response.status()).toBeTruthy();

  response = await response.json();
  console.log(response)

  // Expect a title "to contain" a substring.
 // await expect(page).toHaveTitle(/Playwright/);
});


