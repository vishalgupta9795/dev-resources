using DataUtility.Interfaces;
using DataUtility.Services;
using Voice_AI;

var builder = Host.CreateApplicationBuilder(args);
builder.Services.AddHostedService<Worker>();
builder.Services.AddScoped<IDbHelperFactory, DbHelperFactory>();

var host = builder.Build();
host.Run();
