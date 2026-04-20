$word = New-Object -ComObject Word.Application
$word.Visible = $false
$doc = $word.Documents.Open("c:\Users\hp - Omen\Downloads\Programming Courses Presentation (en).pdf", $false, $true)
$text = $doc.Content.Text
Out-File -FilePath "C:\Users\hp - Omen\.gemini\antigravity\scratch\pdf_content.txt" -InputObject $text
$doc.Close()
$word.Quit()
