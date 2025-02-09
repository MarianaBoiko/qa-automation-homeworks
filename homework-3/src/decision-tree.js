let temperature = -5;

if (temperature > 30) {
    console.log('Weather: Hot');
} else if (temperature > 20) {
    console.log('Weather: Warm');
} else if (temperature > 10) {
    console.log('Weather: Mild');
} else if (temperature > 0) {
    console.log('Weather: Cool');
} else if (temperature <= 0 && temperature > -55) {
    console.log('Weather: Cold');
} else {
    console.log('Weather: Unknown');
}
