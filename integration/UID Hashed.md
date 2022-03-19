
## Why does Crewcharge use Hashes of User Ids (uid_hashed)? 

[![IMAGE_ALT](https://i.imgur.com/QxYOMIk.png)](https://www.youtube.com/watch?v=ETVumUXvs94&feature=youtu.be)

To log a trigger, you also need a **uid_hashed**.
Think of this like a primary key for accessing customer information.

- A hash function is a one way function that always returns the same result, but
  can&apos;t be traced back to the original value.

- UID hashed must be a hash of a identifier of the user. Best example is database
  id, email or phone number.

- Never use uid_hashes that can identify a user personally.

- All uid hashes must start with your project key **YOUR-PROJECT-KEY**_

We use SHA-3 256 in our libraries, some might safer with a smaller hash function, feel free to use any
hashing function.

But make sure you are hashing the id before attaching the user.
