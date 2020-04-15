console.log(`# Auto generated file
runtime: ${process.env.RUNTIME || 'nodejs12'}
instance_class: ${process.env.INSTANCE_CLASS || 'F1'}
automatic_scaling: 
    min_instances: ${process.env.MIN_INSTANCES || 1}
    max_instances: ${process.env.MAX_INSTANCES || 1}
    max_concurrent_requests: ${process.env.MAX_CONCURRENT_REQUESTS || 50}
env_variables:
    DATABASE_NAME: ${process.env.DATABASE_NAME}
    DB_CONNECTION_STRING: mongodb+srv://${process.env.DB_USER_NAME}:${DB_PASWORD}@${process.env.DB_DOMAIN}
    DEBUG: ${process.env.DEBUG}
`);