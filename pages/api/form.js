export default function handler(req, res) {
    // Get data submitted in request's body.
    const body = req.body
  
    // Optional logging to see the responses
    // in the command line where next.js app is running.
    console.log('api:', body)
    // Guard clause checks for first and last name,
    // and returns early if they are not found
    if (!body.first || !body.last) {
      return res.status(400).json({ data: 'First or last name not found' })
    }
    res.status(200).json({ data:`${body.first} ${body.last} ${body.phone} ${body.Message}`} )
  }