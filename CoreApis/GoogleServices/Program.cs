using DataServiceLayar.Services;
using DataUtility.Interfaces;
using DataUtility.Services;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();



//builder.Services.AddScoped<IDbHelper, SqlDbHelper>();
builder.Services.AddScoped<IDbHelperFactory, DbHelperFactory>();
builder.Services.AddHttpClient<IApiService, ApiService>();

IServiceCollection serviceCollection = builder.Services.Scan(scan => scan
    .FromAssemblyOf<UserServices>()
    .AddClasses(classes => classes.Where(type => type.Name.EndsWith("Services")))
    .AsSelf()
    .WithScopedLifetime()
);

//builder.Services.AddScoped<UserServices>();

var app = builder.Build();
app.UseRouting();
app.MapControllers();
app.MapGet("/", () => "Hello World!");

app.Run();
