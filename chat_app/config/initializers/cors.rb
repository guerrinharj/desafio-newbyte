Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
        origins '*' # ou substitua por seu domínio, ex: 'http://localhost:5173'

        resource '*',
        headers: :any,
        methods: [:get, :post, :put, :patch, :delete, :options, :head],
        expose: ['Authorization'],
        max_age: 600
    end
end