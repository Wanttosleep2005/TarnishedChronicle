using System.Reflection;
using SoulsFormats;

foreach (var path in new[] {
    @"G:\BaiduDowload\Smithbox 1.0.25\Smithbox\SoulsFormats.dll",
    @"G:\BaiduDowload\Smithbox 1.0.25\Smithbox\StudioCore.dll",
    @"G:\BaiduDowload\Smithbox 1.0.25\Smithbox\Smithbox.dll",
    @"G:\BaiduDowload\Smithbox 1.0.25\Smithbox\Andre.Core.dll",
    @"G:\BaiduDowload\Smithbox 1.0.25\Smithbox\Andre.Formats.dll"
})
{
    var asm = Assembly.LoadFrom(path);
    Console.WriteLine($"ASSEMBLY {Path.GetFileName(path)}");
    foreach (var t in asm.GetTypes().Where(t => t.FullName?.Contains("Regulation", StringComparison.OrdinalIgnoreCase) == true || t.FullName?.Contains("Decrypt", StringComparison.OrdinalIgnoreCase) == true || t.FullName?.Contains("Encrypt", StringComparison.OrdinalIgnoreCase) == true || t.FullName?.Contains("EldenRing", StringComparison.OrdinalIgnoreCase) == true || t.FullName?.Contains("ParamManager", StringComparison.OrdinalIgnoreCase) == true))
    {
        Console.WriteLine($"TYPE {t.FullName}");
        foreach (var f in t.GetFields(BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Static | BindingFlags.Instance))
            Console.WriteLine($"  FIELD {f.FieldType} {f.Name}");
        foreach (var c in t.GetConstructors(BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Static | BindingFlags.Instance))
            Console.WriteLine($"  CTOR {c}");
        foreach (var m in t.GetMethods(BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Static | BindingFlags.Instance))
            if (m.Name.Contains("Read", StringComparison.OrdinalIgnoreCase) || m.Name.Contains("Decrypt", StringComparison.OrdinalIgnoreCase) || m.Name.Contains("Encrypt", StringComparison.OrdinalIgnoreCase) || m.Name.Contains("Reg", StringComparison.OrdinalIgnoreCase))
                Console.WriteLine($"  {m}");
    }
}
