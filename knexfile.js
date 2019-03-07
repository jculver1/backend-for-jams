module.exports = {

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://kbomgxfzgkrxns:2c3281530d78925660af4c84b2829dfb51873fb2c646763d30797c0cc85dd161@ec2-54-221-231-167.compute-1.amazonaws.com:5432/dfnj7s5nefdeqh'
  },
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://kbomgxfzgkrxns:2c3281530d78925660af4c84b2829dfb51873fb2c646763d30797c0cc85dd161@ec2-54-221-231-167.compute-1.amazonaws.com:5432/dfnj7s5nefdeqh'
  },
 

};