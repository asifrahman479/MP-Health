# Generated by Django 3.0.3 on 2020-12-10 17:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0007_auto_20201209_2352'),
    ]

    operations = [
        migrations.AddField(
            model_name='appointment',
            name='CategoryColor',
            field=models.CharField(blank=True, choices=[('#00bdae', 'Emergency'), ('#ea7a57', 'Sick')], max_length=10),
        ),
    ]
