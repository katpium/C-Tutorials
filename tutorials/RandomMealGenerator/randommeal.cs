using System.Net.Http.Json;
using System.Text.Json.Serialization;

Console.WriteLine("=== Random Meal Generator ===");
Console.WriteLine();

HttpClient client = new HttpClient();
string url = "https://www.themealdb.com/api/json/v1/1/random.php";
MealResponse? response = await client.GetFromJsonAsync<MealResponse>(url);

if (response == null || response.Meals == null || response.Meals.Count == 0)
{
    Console.WriteLine("No meal found.");
    return;
}

Meal meal = response.Meals[0];

Console.WriteLine($"Meal : {meal.Name}");
Console.WriteLine($"Category: {meal.Category}");
Console.WriteLine($"Cuisine: {meal.Cuisine}");
Console.WriteLine();
Console.WriteLine($"Instruction: {meal.Instruction}");


public class MealResponse
{
    [JsonPropertyName("meals")]
    public List<Meal>? Meals { get; set; }
}

public class Meal
{
    [JsonPropertyName("strMeal")]
    public string Name { get; set; } = "";
    
    [JsonPropertyName("strCategory")]
    public string Category { get; set; } = "";
    
    [JsonPropertyName("strArea")]
    public string Cuisine { get; set; } = "";
    
    [JsonPropertyName("strInstructions")]
    public string Instruction {get; set; } ="";

}